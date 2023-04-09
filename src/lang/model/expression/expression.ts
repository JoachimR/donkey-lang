export type IdExpression = {
  type: 'IdExpression'
  name: string
}
export type CallExpression = {
  type: 'CallExpression'
  name: string
  arguments: Expression[]
}
export type NumberExpression = {
  type: 'NumberExpression'
  value: number
}
export type StringExpression = {
  type: 'StringExpression'
  value: string
}
export type VariableDeclarationExpression = {
  type: 'VariableDeclarationExpression'
  identifier: IdExpression
  assignment: StringExpression | NumberExpression
}

export type Expression =
  | IdExpression
  | CallExpression
  | NumberExpression
  | StringExpression
  | VariableDeclarationExpression
