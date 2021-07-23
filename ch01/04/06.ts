interface Vector2D_0406 {
  x: number
  y: number
}
function calculateLength_0406(v: Vector2D_0406) {
  return Math.sqrt(v.x * v.x + v.y * v.y)
}
interface NamedVector_0406 {
  name: string
  x: number
  y: number
}
interface Vector3D_0406 {
  x: number
  y: number
  z: number
}
function normalize_0406(v: Vector3D_0406) {
  const length = calculateLength_0406(v)
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  }
}
