const obj_5404 = {
  one: 'uno',
  two: 'dos',
  three: 'tres',
}

for (const k in obj_5404) {
  const v = obj_5404[k]
  // ~~~~~~ Element implicitly has an 'any' type
  //        because type ... has no index signature
}

interface ABC_5404 {
  a: string
  b: string
  c: number
}

function foo_5404(abc: ABC_5404) {
  for (const k in abc) {
    // const k: string
    const v = abc[k]
    // ~~~~~~ Element implicitly has an 'any' type
    //        because type 'ABC' has no index signature
  }
}
