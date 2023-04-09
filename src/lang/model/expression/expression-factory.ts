import {
  CallExpression,
  Expression,
  IdExpression,
  NumberExpression,
  StringExpression,
  VariableDeclarationExpression,
} from './expression'

export function createIdExpression(name: string): IdExpression {
  return {
    type: 'IdExpression',
    name,
  }
}

export function createCallExpression(name: string, args: Expression[]): CallExpression {
  return {
    type: 'CallExpression',
    name,
    arguments: args,
  }
}

export function createNumberExpression(value: number): NumberExpression {
  return {
    type: 'NumberExpression',
    value,
  }
}

export function createStringExpression(value: string): StringExpression {
  return {
    type: 'StringExpression',
    value,
  }
}

export function createVariableDeclaration(
  identifier: VariableDeclarationExpression['identifier'],
  assignment: VariableDeclarationExpression['assignment']
): VariableDeclarationExpression {
  return {
    type: 'VariableDeclarationExpression',
    identifier,
    assignment,
  }
}
