import { Token } from './model/token/token'
import {
  createCloseToken,
  createNameToken,
  createNumberToken,
  createOpenToken,
  createStringToken,
} from './model/token/token-factory'
import { parse } from './parse'

describe(parse, () => {
  it.each([
    [[createNumberToken(2)], { type: 'NumberExpression', value: 2 }],
    [[createStringToken('hello')], { type: 'StringExpression', value: 'hello' }],
    [[createNameToken(['h', 'i'])], { type: 'IdExpression', name: 'hi' }],
    [
      [
        createOpenToken(),
        createNameToken(['a', 'd', 'd']),
        createNumberToken(2),
        createNumberToken(3),
        createCloseToken(),
      ],
      {
        type: 'CallExpression',
        name: 'add',
        arguments: [
          { type: 'NumberExpression', value: 2 },
          { type: 'NumberExpression', value: 3 },
        ],
      },
    ],
    [
      [
        createOpenToken(),
        createNameToken(['a', 'd', 'd']),
        createNumberToken(2),
        createNumberToken(3),
        createOpenToken(),
        createNameToken(['s', 'u', 'b', 't', 'r', 'a', 'c', 't']),
        createNumberToken(4),
        createNumberToken(2),
        createCloseToken(),
        createCloseToken(),
      ],
      {
        type: 'CallExpression',
        name: 'add',
        arguments: [
          { type: 'NumberExpression', value: 2 },
          { type: 'NumberExpression', value: 3 },
          {
            type: 'CallExpression',
            name: 'subtract',
            arguments: [
              { type: 'NumberExpression', value: 4 },
              { type: 'NumberExpression', value: 2 },
            ],
          },
        ],
      },
    ],
  ])('%j ==> %j', (tokens: Token[], expected) => {
    expect(parse(tokens)).toEqual(expected)
  })
})
