type UpperCaseLetters =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z'
export type Letter = UpperCaseLetters | Lowercase<UpperCaseLetters>
export type NameToken = {
  type: 'Name'
  value: Letter[]
}

export type OpenToken = { type: 'Open' }
export type CloseToken = { type: 'Close' }
export type OpenOrCloseToken = OpenToken | CloseToken

export type NumberToken = {
  type: 'Number'
  value: number
}

export type StringToken = {
  type: 'String'
  value: string
}

export type Token = OpenToken | CloseToken | NameToken | NumberToken | StringToken
