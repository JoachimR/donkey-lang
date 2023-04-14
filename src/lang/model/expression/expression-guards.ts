import {
  CallExpression,
  Expression,
  IdExpression,
  NumberExpression,
  StringExpression,
  VariableDeclarationExpression,
} from './expression'

export function isIdExpression(expression: Expression): expression is IdExpression {
  return expression.type === 'IdExpression'
}

export function isCallExpression(expression: Expression): expression is CallExpression {
  return expression.type === 'CallExpression'
}

export function isNumberExpression(expression: Expression): expression is NumberExpression {
  return expression.type === 'NumberExpression'
}

export function isStringExpression(expression: Expression): expression is StringExpression {
  return expression.type === 'StringExpression'
}

export function isVariableDeclarationExpression(expression: Expression): expression is VariableDeclarationExpression {
  return expression.type === 'VariableDeclarationExpression'
}
