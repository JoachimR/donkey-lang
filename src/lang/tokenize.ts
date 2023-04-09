import { Letter, Token } from './model/token/token'
import {
  createOpenToken,
  createCloseToken,
  createNumberToken,
  createNameToken,
  createStringToken,
} from './model/token/token-factory'

export function tokenize(code: string): Token[] {
  const tokens: Token[] = []
  let cursor = 0

  while (cursor < code.length) {
    const character = code[cursor]

    if (isOpeningParenthesis(character)) {
      tokens.push(createOpenToken())
      cursor++
      continue
    }
    if (isClosingParenthesis(character)) {
      tokens.push(createCloseToken())
      cursor++
      continue
    }

    if (isWhitespace(character)) {
      cursor++
      continue
    }

    if (isNumber(character)) {
      let number = character

      while (isNumber(code[++cursor])) {
        number += code[cursor]
      }

      tokens.push(createNumberToken(parseInt(number)))

      continue
    }

    if (isLetter(character)) {
      const letters: Letter[] = [character]

      cursor++
      let nextCharacter = code[cursor]
      while (isLetter(nextCharacter)) {
        letters.push(nextCharacter)
        cursor++
        nextCharacter = code[cursor]
      }

      tokens.push(createNameToken(letters))

      continue
    }

    if (isQuote(character)) {
      let string = ''

      while (!isQuote(code[++cursor])) {
        string += code[cursor]
      }

      tokens.push(createStringToken(string))

      cursor++
      continue
    }

    throw new Error(`${character} is not valid`)
  }

  return tokens
}

function isLetter(character: string): character is Letter {
  return /[a-zA-Z]/.test(character)
}

function isWhitespace(character: string) {
  return /\s+/.test(character)
}

function isNumber(character: string) {
  return /^[0-9]+$/.test(character)
}

function isOpeningParenthesis(character: string) {
  return character === '('
}

function isClosingParenthesis(character: string) {
  return character === ')'
}

function isQuote(character: string) {
  return character === '"'
}
