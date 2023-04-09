import { Token, NameToken, OpenToken, CloseToken, NumberToken, StringToken } from './token'

export function isNameToken(token?: Token): token is NameToken {
  return token?.type === 'Name'
}

export function isOpenToken(token?: Token): token is OpenToken {
  return token?.type === 'Open'
}

export function isCloseToken(token?: Token): token is CloseToken {
  return token?.type === 'Close'
}

export function isNumberToken(token?: Token): token is NumberToken {
  return token?.type === 'Number'
}

export function isStringToken(token?: Token): token is StringToken {
  return token?.type === 'String'
}
