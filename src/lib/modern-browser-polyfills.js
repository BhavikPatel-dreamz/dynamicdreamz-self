// Next.js always ships `polyfill-module` to every browser. Chrome 111,
// Firefox 111, and Safari 16.4 already implement those Baseline APIs except
// `URL.canParse` (Chrome 120, Firefox 115, Safari 17). Keep only that shim.
if (!("canParse" in URL)) {
  URL.canParse = function canParse(url, base) {
    try {
      return Boolean(new URL(url, base));
    } catch {
      return false;
    }
  };
}
