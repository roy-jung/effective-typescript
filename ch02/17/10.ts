interface Outer_1710 {
  inner: {
    x: number
  }
}
const o_1710: Readonly<Outer_1710> = { inner: { x: 0 } }
o_1710.inner = { x: 1 }
// ~~~~ Cannot assign to 'inner' because it is a read-only property
o_1710.inner.x = 1 // OK
