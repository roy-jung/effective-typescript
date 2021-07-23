interface Vector2D_0404 {
  x: number
  y: number
}
function calculateLength_0404(v: Vector2D_0404) {
  return Math.sqrt(v.x * v.x + v.y * v.y)
}
interface NamedVector_0404 {
  name: string
  x: number
  y: number
}
const v_0404: NamedVector_0404 = { x: 3, y: 4, name: 'Zee' }
calculateLength_0404(v_0404) // OK, result is 5
