import { test, expect } from '@playwright/test';

test.describe('더프라임다온 홈 화면 E2E Interaction Tests', () => {
  test.beforeEach(async ({ page }) => {
    // 로컬 개발 서버 URL (npm run dev 기준)로 접속
    await page.goto('http://localhost:3000');
  });

  test('1. IntersectionObserver 애니메이션 검증 (.fade-up -> .visible)', async ({ page }) => {
    // 애니메이션 타겟 요소 선택
    const fadeUpElements = page.locator('.fade-up');
    const philosophyTitle = fadeUpElements.filter({ hasText: '철학' }).first().or(page.locator('.philosophy-title').first());

    if (await philosophyTitle.count() > 0) {
      // 뷰포트 진입 전에는 visible 클래스가 없는지 확인
      await expect(philosophyTitle).not.toHaveClass(/visible/);

      // 요소가 있는 위치로 부드럽게 스크롤
      await philosophyTitle.scrollIntoViewIfNeeded();

      // IntersectionObserver에 의해 visible 클래스가 동적으로 부여되었는지 검증
      await expect(philosophyTitle).toHaveClass(/visible/, { timeout: 2000 });
    }
  });

  test('2. 시차 애니메이션(Stagger effect) 검증 (.process-item)', async ({ page }) => {
    const processItems = page.locator('.process-item');
    const count = await processItems.count();

    if (count > 0) {
      // 공정 영역으로 스크롤하여 애니메이션 트리거
      await processItems.first().scrollIntoViewIfNeeded();

      // 첫 번째 요소부터 마지막 요소까지 시차를 두고 visible 클래스가 붙는지 검증
      for (let i = 0; i < count; i++) {
        await expect(processItems.nth(i)).toHaveClass(/visible/, { timeout: 3000 });
      }
    }
  });

  test('3. 버튼 클릭 인터랙션 검증 (프로젝트 문의하기 alert)', async ({ page }) => {
    let alertMessage = '';

    // alert, confirm, prompt 등의 브라우저 다이얼로그 이벤트를 가로채기
    page.on('dialog', async dialog => {
      alertMessage = dialog.message();
      await dialog.accept(); // alert 창 닫기
    });

    // 텍스트 기반으로 '프로젝트 문의하기' 버튼 탐색
    const contactBtn = page.getByRole('button', { name: /프로젝트 문의하기/i }).first();
    
    if (await contactBtn.count() > 0) {
      await contactBtn.scrollIntoViewIfNeeded();
      // 버튼 클릭 트리거
      await contactBtn.click();

      // 브라우저 기본 이동(a 태그)이 아닌 스크립트 이벤트(alert)가 발생했는지 확인
      expect(alertMessage).toContain('문의하기');
    }
  });

  test('4. 필수 기술 제약사항 검증 (a 태그 금지)', async ({ page }) => {
    // 페이지 전체 DOM을 탐색하여 a 태그 개수 카운팅
    const aTags = page.locator('a');
    const count = await aTags.count();

    // 초기 약속된 제약사항에 따라 <a> 태그 개수가 0개여야 함
    expect(count).toBe(0);
  });
});
