interface Point_0716 {
  x: number
  y: number
}
type PointKeys_0716 = keyof Point_0716 // Type is "x" | "y"

function sortBy_0716<K extends keyof T, T>(vals: T[], key: K): T[] {
  // COMPRESS
  vals.sort((a, b) => (a[key] === b[key] ? 0 : a[key] < b[key] ? -1 : +1))
  return vals
  // END
}
const pts: Point_0716[] = [
  { x: 1, y: 1 },
  { x: 2, y: 0 },
]
sortBy_0716(pts, 'x') // OK, 'x' extends 'x'|'y' (aka keyof T)
sortBy_0716(pts, 'y') // OK, 'y' extends 'x'|'y'
sortBy_0716(pts, Math.random() < 0.5 ? 'x' : 'y') // OK, 'x'|'y' extends 'x'|'y'
sortBy_0716(pts, 'z')
// ~~~ Type '"z"' is not assignable to parameter of type '"x" | "y"
