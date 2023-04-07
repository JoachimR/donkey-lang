import { ClosingParenthesis, Letter, OpeningParenthesis } from './model/symbol';

const LETTER = /[a-zA-Z]/;
const WHITESPACE = /\s+/;
const NUMBER = /^[0-9]+$/;
const OPERATORS = ['+', '-', '*', '/', '%'];

export const isLetter = (character: string): character is Letter =>
  LETTER.test(character);

export const isWhitespace = (character: string) => WHITESPACE.test(character);

export const isNumber = (character: string) => NUMBER.test(character);

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

export const isOperator = (character: string) => OPERATORS.includes(character);
