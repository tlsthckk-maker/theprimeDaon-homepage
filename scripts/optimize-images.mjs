/**
 * public/ 이미지 최적화 스크립트
 *
 * 왜 필요한가:
 *   public/images 의 사진 70장이 장당 평균 2.9MB(PNG)인데 화면에는 280x320px 로 표시된다.
 *   public/equipment 의 설비 사진 12장은 장당 평균 6.4MB 다.
 *   PNG 는 사진에 맞지 않는 포맷이고, 원본 해상도가 표시 크기의 몇 배다.
 *
 * 무엇을 하는가:
 *   1) convert  — 큰 이미지를 긴 변 기준으로 축소하고 WebP 로 변환한다. 원본은 지우지 않는다.
 *   2) verify   — src/ 가 참조하는 모든 미디어 경로가 public/ 에 실제로 존재하는지 검사한다.
 *   3) prune    — verify 를 통과한 경우에만, WebP 로 대체된 원본을 삭제한다.
 *
 * 사용:
 *   node scripts/optimize-images.mjs convert
 *   node scripts/optimize-images.mjs verify
 *   node scripts/optimize-images.mjs prune
 *
 * 원본을 지우기 전에 반드시 convert -> (코드 참조 수정) -> verify -> build 순서를 지킬 것.
 */

import { readdir, stat, readFile, unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, 'public');
const SRC = path.join(ROOT, 'src');

// 이 크기 미만은 건드리지 않는다 (로고, 썸네일 등)
const MIN_BYTES = 200 * 1024;

// 폴더별 최대 긴 변 (px) 과 품질
const RULES = [
  { dir: path.join(PUBLIC, 'images'),    maxSide: 1400, quality: 80 },
  { dir: path.join(PUBLIC, 'equipment'), maxSide: 1600, quality: 82 },
  { dir: PUBLIC,                         maxSide: 1600, quality: 82, shallow: true },
];

const CONVERTIBLE = new Set(['.png', '.jpg', '.jpeg']);
const MEDIA_RE = /["'`(]\s*(\/[^"'`)]*?\.(?:png|jpe?g|webp|gif|svg|mp4|webm))/gi;

const mb = (n) => (n / 1024 / 1024).toFixed(2);

async function listImages({ dir, shallow }) {
  if (!existsSync(dir)) return [];
  const out = [];
  for (const name of await readdir(dir)) {
    const full = path.join(dir, name);
    const s = await stat(full);
    if (s.isDirectory()) continue;            // 하위 폴더는 각자 RULES 항목이 담당
    if (shallow && path.dirname(full) !== dir) continue;
    if (!CONVERTIBLE.has(path.extname(name).toLowerCase())) continue;
    out.push({ full, name, size: s.size });
  }
  return out;
}

async function convert() {
  let before = 0, after = 0, converted = 0, skipped = 0;
  const rows = [];

  for (const rule of RULES) {
    for (const f of await listImages(rule)) {
      if (f.size < MIN_BYTES) { skipped++; continue; }

      const outPath = f.full.replace(/\.(png|jpe?g)$/i, '.webp');
      const meta = await sharp(f.full).metadata();
      const longSide = Math.max(meta.width || 0, meta.height || 0);

      await sharp(f.full)
        .rotate()                                            // EXIF 회전 반영
        .resize({
          width:  (meta.width  || 0) >= (meta.height || 0) ? Math.min(rule.maxSide, meta.width  || rule.maxSide) : undefined,
          height: (meta.height || 0) >  (meta.width  || 0) ? Math.min(rule.maxSide, meta.height || rule.maxSide) : undefined,
          withoutEnlargement: true,
        })
        .webp({ quality: rule.quality })
        .toFile(outPath);

      const outSize = (await stat(outPath)).size;
      before += f.size; after += outSize; converted++;
      rows.push({
        file: path.relative(PUBLIC, f.full),
        px: `${meta.width}x${meta.height} -> ${Math.min(longSide, rule.maxSide)}`,
        from: mb(f.size), to: mb(outSize),
        cut: `${(100 - (outSize / f.size) * 100).toFixed(0)}%`,
      });
    }
  }

  rows.sort((a, b) => Number(b.from) - Number(a.from));
  console.table(rows.slice(0, 20));
  if (rows.length > 20) console.log(`... 외 ${rows.length - 20}개`);
  console.log('');
  console.log(`변환: ${converted}개 (건너뜀 ${skipped}개, 200KB 미만)`);
  console.log(`용량: ${mb(before)} MB -> ${mb(after)} MB  (${(100 - (after / before) * 100).toFixed(1)}% 감소)`);
  console.log('');
  console.log('원본은 아직 삭제하지 않았습니다. 코드 참조를 .webp 로 바꾼 뒤');
  console.log('  node scripts/optimize-images.mjs verify');
  console.log('를 실행해 확인하고, 통과하면 prune 하세요.');
}

async function collectRefs() {
  const refs = new Map();   // 경로 -> [참조한 파일들]
  const walk = async (dir) => {
    for (const name of await readdir(dir)) {
      const full = path.join(dir, name);
      const s = await stat(full);
      if (s.isDirectory()) { await walk(full); continue; }
      if (!/\.(tsx?|jsx?|mjs|json|css)$/i.test(name)) continue;
      const text = await readFile(full, 'utf8');
      for (const m of text.matchAll(MEDIA_RE)) {
        const p = m[1];
        if (p.startsWith('//')) continue;
        if (!refs.has(p)) refs.set(p, []);
        refs.get(p).push(path.relative(ROOT, full));
      }
    }
  };
  await walk(SRC);
  return refs;
}

async function verify() {
  const refs = await collectRefs();
  const missing = [];
  for (const [p, sources] of refs) {
    const disk = path.join(PUBLIC, decodeURIComponent(p));
    if (!existsSync(disk)) missing.push({ path: p, sources: [...new Set(sources)].join(', ') });
  }

  console.log(`src/ 에서 참조하는 미디어 경로: ${refs.size}개`);
  if (missing.length === 0) {
    console.log('전부 public/ 에 존재합니다. 깨진 참조 없음.');
    return true;
  }
  console.log('');
  console.log(`!! 존재하지 않는 파일을 가리키는 참조 ${missing.length}건:`);
  console.table(missing);
  return false;
}

async function prune() {
  if (!(await verify())) {
    console.log('');
    console.log('깨진 참조가 있어 삭제를 중단합니다. 참조를 먼저 고치세요.');
    process.exitCode = 1;
    return;
  }
  let removed = 0, freed = 0;
  for (const rule of RULES) {
    for (const f of await listImages(rule)) {
      const webp = f.full.replace(/\.(png|jpe?g)$/i, '.webp');
      if (!existsSync(webp)) continue;          // 변환본이 없으면 원본 유지
      const rel = '/' + path.relative(PUBLIC, f.full).split(path.sep).join('/');
      const refs = await collectRefs();
      if (refs.has(rel)) {                      // 아직 원본을 참조 중이면 유지
        console.log(`유지(아직 참조됨): ${rel}`);
        continue;
      }
      freed += f.size;
      await unlink(f.full);
      removed++;
    }
  }
  console.log('');
  console.log(`원본 삭제: ${removed}개, 확보: ${mb(freed)} MB`);
}

const cmd = process.argv[2];
if (cmd === 'convert') await convert();
else if (cmd === 'verify') await verify();
else if (cmd === 'prune') await prune();
else {
  console.log('사용법: node scripts/optimize-images.mjs <convert|verify|prune>');
  process.exitCode = 1;
}
