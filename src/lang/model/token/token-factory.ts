import { NameToken, OpenToken, CloseToken, NumberToken, StringToken } from './token'

export function createNameToken(value: NameToken['value']): NameToken {
  return {
    type: 'Name',
    value,
  }
}
export function createOpenToken(): OpenToken {
  return {
    type: 'Open',
  }
}
export function createCloseToken(): CloseToken {
  return {
    type: 'Close',
  }
}
export function createNumberToken(value: NumberToken['value']): NumberToken {
  return {
    type: 'Number',
    value,
  }
}
export function createStringToken(value: StringToken['value']): StringToken {
  return {
    type: 'String',
    value,
  }
}
