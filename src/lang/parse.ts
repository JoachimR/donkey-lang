import { assert, checkExhaustive, peek, pop } from '../utils'
import { Expression } from './model/expression/expression'
import {
  createCallExpression,
  createIdExpression,
  createNumberExpression,
  createStringExpression,
} from './model/expression/expression-factory'
import { OpenOrCloseToken, Token } from './model/token/token'
import { isCloseToken, isNameToken, isNumberToken, isOpenToken, isStringToken } from './model/token/token-guards'
import type { ArrayOrSingle } from '../types'

export function parse(tokens: Token[]): Expression | undefined {
  return parseGroupedTokens(groupTokens(tokens))
}

type PToken = Exclude<Token, OpenOrCloseToken>

function parseGroupedTokens(tokens: ArrayOrSingle<PToken>): Expression {
  if (Array.isArray(tokens)) {
    const [first, ...rest] = tokens
    assert(isNameToken(first) && Array.isArray(rest), 'invalid token', { tokens })
    return createCallExpression(first.value.join(''), rest.map(parseGroupedTokens))
  }
  const token: PToken = tokens
  if (isNumberToken(token)) {
    return createNumberExpression(token.value)
  }
  if (isStringToken(token)) {
    return createStringExpression(token.value)
  }
  if (isNameToken(token)) {
    return createIdExpression(token.value.join(''))
  }
  return checkExhaustive(token)
}

function groupTokens(tokens: Token[]): ArrayOrSingle<PToken> {
  const token = pop(tokens)
  if (!token) {
    return []
  }

  if (isOpenToken(token)) {
    const group = []
    let peeked = peek(tokens)
    while (!isCloseToken(peeked)) {
      const groupedTokens: ArrayOrSingle<PToken> = groupTokens(tokens)
      group.push(groupedTokens)
      peeked = peek(tokens)
    }
    const poppedToken = pop(tokens)
    assert(isCloseToken(poppedToken), 'invalid token', { token })
    // nested arrays, ignore typing for now
    // eslint-disable-next-line
    return group as any
  }

  assert(!isOpenToken(token) && !isCloseToken(token), 'invalid token', { token })
  return token
}
