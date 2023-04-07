import { isOpeningParenthesis } from '../character-guards';
import { ClosingParenthesis, Letter, OpeningParenthesis } from './symbol';

export type NameToken = {
  type: 'Name';
  value: Letter[];
};

type Open = 0;
type Closed = 1;
export type ParenthesisToken = {
  type: 'Parenthesis';
  kind: Open | Closed;
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
  value: OpeningParenthesis | ClosingParenthesis
): ParenthesisToken => ({
  type: 'Parenthesis',
  kind: isOpeningParenthesis(value) ? 0 : 1,
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
