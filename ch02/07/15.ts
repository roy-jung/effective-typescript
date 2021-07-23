function getKey_0715<K extends string>(val: any, key: K) {
  // ...
}
getKey_0715({}, 'x') // OK, 'x' extends string
getKey_0715({}, Math.random() < 0.5 ? 'a' : 'b') // OK, 'a'|'b' extends string
getKey_0715({}, document.title) // OK, string extends string
getKey_0715({}, 12)
// ~~ Type '12' is not assignable to parameter of type 'string'
