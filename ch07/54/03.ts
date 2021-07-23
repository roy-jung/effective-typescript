const obj_5403 = {
  one: 'uno',
  two: 'dos',
  three: 'tres',
};

for (const k in obj_5403) {
  const v = obj_5403[k];
  // ~~~~~~ Element implicitly has an 'any' type
  //        because type ... has no index signature
}

let k: keyof typeof obj_5403;  // Type is "one" | "two" | "three"

for (k in obj_5403) {
  const v = obj_5403[k];  // OK
}
