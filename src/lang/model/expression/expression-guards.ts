import {
  CallExpression,
  Expression,
  IdExpression,
  NumberExpression,
  String,
  VariableDeclarationExpression,
} from './expression'

export function isIdentifier(expression: Expression): expression is IdExpression {
  return expression.type === 'Identifier'
}

export function isCallExpression(expression: Expression): expression is CallExpression {
  return expression.type === 'CallExpression'
}

export function isNumericLiteral(expression: Expression): expression is NumberExpression {
  return expression.type === 'NumericLiteral'
}

export function isStringLiteral(expression: Expression): expression is string {
  return expression.type === 'StringLiteral'
}

export function isVariableDeclaration(expression: Expression): expression is VariableDeclarationExpression {
  return expression.type === 'VariableDeclaration'
}
