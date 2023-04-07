export function parseAndEvaluate(code: string) {
  if (!code) {
    return;
  }
  const text = code.trim();
  if (!text) {
    return;
  }
  console.log(code);
}
