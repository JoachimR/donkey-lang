export function logError(e: unknown) {
  // eslint-disable-next-line no-console
  console.error(e)
}

export function peek<T>(array: T[]): T {
  return array[0]
}
export function popNonEmpty<T>(array: [T, ...T[]]): T {
  return array.shift() as T
}
export function pop<T>(array: T[]): T | undefined {
  return array.shift()
}

export function assert<T>(condition: T, msg?: string, context?: Readonly<Record<string, unknown>>): asserts condition {
  if (!condition) {
    const message = msg ?? 'Invalid assertion'
    const errorText = context ? `${message}\n Context: ${JSON.stringify(context, null, 2)}` : message
    throw new Error(errorText)
  }
}

export function checkExhaustive(x: never): never {
  throw new Error(`Exhaustive check failed: ${JSON.stringify(x, null, 2)}`)
}
