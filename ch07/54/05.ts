const obj_5405 = {
  one: 'uno',
  two: 'dos',
  three: 'tres',
}
for (const k in obj_5405) {
  const v = obj_5405[k]
  // ~~~~~~ Element implicitly has an 'any' type
  //        because type ... has no index signature
}
interface ABC_5405 {
  a: string
  b: string
  c: number
}

function foo(abc: ABC_5405) {
  for (const k in abc) {
    // const k: string
    const v = abc[k]
    // ~~~~~~ Element implicitly has an 'any' type
    //        because type 'ABC' has no index signature
  }
}
const x_5405 = { a: 'a', b: 'b', c: 2, d: new Date() }
foo(x_5405) // OK
