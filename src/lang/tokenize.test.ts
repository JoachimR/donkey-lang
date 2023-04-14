import { tokenize } from './tokenize'

describe(tokenize, () => {
  it('should return an array', () => {
    expect(Array.isArray(tokenize(''))).toBe(true)
  })

  it('should be able to tokenize a pair of parentheses', () => {
    const input = '()'
    const result = [{ type: 'Open' }, { type: 'Close' }]

    expect(tokenize(input)).toEqual(result)
  })

  it('should ignore whitespace completely', () => {
    const input = '                  '

    expect(tokenize(input)).toEqual([])
  })

  it('should correctly tokenize a single digit', () => {
    const input = '2'
    const result = [{ type: 'Number', value: 2 }]

    expect(tokenize(input)).toEqual(result)
  })

  it('should be able to handle single numbers in expressions', () => {
    const input = '(1 2)'

    const result = [{ type: 'Open' }, { type: 'Number', value: 1 }, { type: 'Number', value: 2 }, { type: 'Close' }]

    expect(tokenize(input)).toEqual(result)
  })

  it('should be able to handle single letters in expressions', () => {
    const input = '(a b)'

    const result = [{ type: 'Open' }, { type: 'Name', value: ['a'] }, { type: 'Name', value: ['b'] }, { type: 'Close' }]

    expect(tokenize(input)).toEqual(result)
  })

  it('should be able to handle multiple-digit numbers', () => {
    const input = '(11 22)'

    const result = [{ type: 'Open' }, { type: 'Number', value: 11 }, { type: 'Number', value: 22 }, { type: 'Close' }]

    expect(tokenize(input)).toEqual(result)
  })

  it('should correctly tokenize a simple expression', () => {
    const input = '(add 2 3)'
    const result = [
      { type: 'Open' },
      { type: 'Name', value: ['a', 'd', 'd'] },
      { type: 'Number', value: 2 },
      { type: 'Number', value: 3 },
      { type: 'Close' },
    ]

    expect(tokenize(input)).toEqual(result)
  })

  it('should ignore whitespace', () => {
    const input = '   (add    2 3)'
    const result = [
      { type: 'Open' },
      { type: 'Name', value: ['a', 'd', 'd'] },
      { type: 'Number', value: 2 },
      { type: 'Number', value: 3 },
      { type: 'Close' },
    ]

    expect(tokenize(input)).toEqual(result)
  })

  it('should know about strings', () => {
    const input = '(log "hello" "world")'
    const result = [
      { type: 'Open' },
      { type: 'Name', value: ['l', 'o', 'g'] },
      { type: 'String', value: 'hello' },
      { type: 'String', value: 'world' },
      { type: 'Close' },
    ]

    expect(tokenize(input)).toEqual(result)
  })
})
