interface Vector2D_0407 {
  x: number
  y: number
}
function calculateLength_0407(v: Vector2D_0407) {
  return Math.sqrt(v.x * v.x + v.y * v.y)
}
interface NamedVector_0407 {
  name: string
  x: number
  y: number
}
interface Vector3D_0407 {
  x: number
  y: number
  z: number
}
function calculateLengthL1_0407(v: Vector3D_0407) {
  let length = 0
  for (const axis of Object.keys(v)) {
    const coord = v[axis]
    // ~~~~~~~ Element implicitly has an 'any' type because ...
    //         'string' can't be used to index type 'Vector3D'
    length += Math.abs(coord)
  }
  return length
}
