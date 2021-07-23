interface ABC_5408 {
  a: string
  b: string
  c: number
}
function foo(abc: ABC_5408) {
  for (const [k, v] of Object.entries(abc)) {
    k // Type is string
    v // Type is any
  }
}
