const LANGS = ["ko", "en", "ja", "zh"];

export function buildAlternates(lng: string, path: string = "") {
  const languages: Record<string, string> = {};
  for (const l of LANGS) languages[l] = `/${l}${path}`;
  languages["x-default"] = `/ko${path}`;
  return { canonical: `/${lng}${path}`, languages };
}
