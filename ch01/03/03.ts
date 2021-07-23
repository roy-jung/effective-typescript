interface Square_0303 {
  kind: 'square_0303'
  width: number
}
interface Rectangle_0303 {
  kind: 'rectangle'
  height: number
  width: number
}
type Shape_0303 = Square_0303 | Rectangle_0303

function calculateArea_0303(shape: Shape_0303) {
  if (shape.kind === 'rectangle') {
    shape // Type is Rectangle_0303
    return shape.width * shape.height
  } else {
    shape // Type is Square_0303
    return shape.width * shape.width
  }
}
