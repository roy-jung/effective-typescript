interface ABC_5407 {
  a: string;
  b: string;
  c: number;
}
function foo(abc_5407: ABC_5407) {
  let k: keyof ABC_5407;
  for (k in abc_5407) {  // let k: "a" | "b" | "c"
    const v = abc_5407[k];  // Type is string | number
  }
}
