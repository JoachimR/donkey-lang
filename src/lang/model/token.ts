import { Letter, OpeningParenthesis, ClosingParenthesis } from './symbols';

export type NameToken = {
  type: 'Name';
  value: Letter[];
};

export type ParenthesisToken = {
  type: 'Parenthesis';
  value: OpeningParenthesis | ClosingParenthesis;
};

export type NumberToken = {
  type: 'Number';
  value: number;
};

export type StringToken = {
  type: 'String';
  value: string;
};

export type Token = NameToken | ParenthesisToken | NumberToken | StringToken;

export const createNameToken = (value: NameToken['value']): NameToken => ({
  type: 'Name',
  value,
});
export const createParenthesisToken = (
  value: ParenthesisToken['value']
): ParenthesisToken => ({
  type: 'Parenthesis',
  value,
});
export const createNumberToken = (
  value: NumberToken['value']
): NumberToken => ({
  type: 'Number',
  value,
});
export const createStringToken = (
  value: StringToken['value']
): StringToken => ({
  type: 'String',
  value,
});

export const isNameToken = (token: Token): token is NameToken =>
  token.type === 'Name';
export const isParenthesisToken = (token: Token): token is ParenthesisToken =>
  token.type === 'Parenthesis';
export const isNumberToken = (token: Token): token is NumberToken =>
  token.type === 'Number';
export const isStringToken = (token: Token): token is StringToken =>
  token.type === 'String';
