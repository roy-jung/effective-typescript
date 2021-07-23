interface Vector2D_0408 {
  x: number
  y: number
}
function calculateLength_0408(v: Vector2D_0408) {
  return Math.sqrt(v.x * v.x + v.y * v.y)
}
interface NamedVector_0408 {
  name: string
  x: number
  y: number
}
interface Vector3D_0408 {
  x: number
  y: number
  z: number
}
function calculateLengthL1_0408(v: Vector3D_0408) {
  let length = 0
  for (const axis of Object.keys(v)) {
    const coord = v[axis]
    // ~~~~~~~ Element implicitly has an 'any' type because ...
    //         'string' can't be used to index type 'Vector3D'
    length += Math.abs(coord)
  }
  return length
}
const vec3D_0408 = { x: 3, y: 4, z: 1, address: '123 Broadway' }
calculateLengthL1_0408(vec3D_0408) // OK, returns NaN
