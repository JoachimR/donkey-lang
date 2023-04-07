import { ClosingParenthesis, Letter, OpeningParenthesis } from './model/symbol';

const letterRegex = /[a-zA-Z]/;
const whiteSpaceRegex = /\s+/;
const numberRegex = /^[0-9]+$/;
const operators = ['+', '-', '*', '/', '%'];

export const isLetter = (character: string): character is Letter =>
  letterRegex.test(character);

export const isWhitespace = (character: string) => whiteSpaceRegex.test(character);

export const isNumber = (character: string) => numberRegex.test(character);

export const isOpeningParenthesis = (
  character: string
): character is OpeningParenthesis => character === '(';

export const isClosingParenthesis = (
  character: string
): character is ClosingParenthesis => character === ')';

export const isParenthesis = (
  character: string
): character is OpeningParenthesis | ClosingParenthesis =>
  isOpeningParenthesis(character) || isClosingParenthesis(character);

export const isQuote = (character: string) => character === '"';

export const isOperator = (character: string) => operators.includes(character);
