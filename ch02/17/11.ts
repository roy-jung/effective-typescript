interface Outer_1711 {
  inner: {
    x: number
  }
}
const o_1711: Readonly<Outer_1711> = { inner: { x: 0 } }
o_1711.inner = { x: 1 }
// ~~~~ Cannot assign to 'inner' because it is a read-only property
o_1711.inner.x = 1 // OK
type T_1711 = Readonly<Outer_1711>
// Type T_1711 = {
//   readonly inner: {
//     x: number;
//   };
// }
