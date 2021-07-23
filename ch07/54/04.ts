const obj_5404 = {
  one: 'uno',
  two: 'dos',
  three: 'tres',
};

for (const k in obj_5404) {
  const v = obj_5404[k];
  // ~~~~~~ Element implicitly has an 'any' type
  //        because type ... has no index signature
}

interface ABC_5404 {
  a: string;
  b: string;
  c: number;
}

function foo(abc_5404: ABC) {
  for (const k in abc_5404) {  // const k: string
    const v = abc_5404[k];
    // ~~~~~~ Element implicitly has an 'any' type
    //        because type 'ABC' has no index signature
  }
}
