import { tokenize } from "./lang/tokenize";

export function parseAndEvaluate(code: string) {
  if (!code) {
    return;
  }
  const text = code.trim();
  if (!text) {
    return;
  }
  const tokens = tokenize(text);
  console.log(tokens)
}
