import {
  isLetter,
  isNumber,
  isParenthesis,
  isQuote,
  isWhitespace,
} from './character-guards';
import { Letter } from './model/symbol';
import {
  createNameToken,
  createNumberToken,
  createParenthesisToken,
  createStringToken,
  Token,
} from './model/token';

export const tokenize = (code: string): Token[] => {
  const tokens: Token[] = [];
  let cursor = 0;

  while (cursor < code.length) {
    const character = code[cursor];

    if (isParenthesis(character)) {
      tokens.push(createParenthesisToken(character));
      cursor++;
      continue;
    }

    if (isWhitespace(character)) {
      cursor++;
      continue;
    }

    if (isNumber(character)) {
      let number = character;

      while (isNumber(code[++cursor])) {
        number += code[cursor];
      }

      tokens.push(createNumberToken(parseInt(number)));

      continue;
    }

    if (isLetter(character)) {
      const symbol: Letter[] = [character];

      cursor++;
      let nextCharacter = code[cursor];
      while (isLetter(nextCharacter)) {
        symbol.push(nextCharacter);
        cursor++;
        nextCharacter = code[cursor];
      }

      tokens.push(createNameToken(symbol));

      continue;
    }

    if (isQuote(character)) {
      let string = '';

      while (!isQuote(code[++cursor])) {
        string += code[cursor];
      }

      tokens.push(createStringToken(string));

      cursor++;
      continue;
    }

    throw new Error(`${character} is not valid`);
  }

  return tokens;
};
