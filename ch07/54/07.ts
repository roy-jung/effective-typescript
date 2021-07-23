interface ABC_5407 {
  a: string
  b: string
  c: number
}
function foo(abc: ABC_5407) {
  let k: keyof ABC_5407
  for (k in abc) {
    // let k: "a" | "b" | "c"
    const v = abc[k] // Type is string | number
  }
}
