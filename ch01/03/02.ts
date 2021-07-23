interface Square_0302 {
  width: number
}
interface Rectangle_0302 extends Square_0302 {
  height: number
}
type Shape_0302 = Square_0302 | Rectangle_0302
function calculateArea_0302(shape: Shape_0302) {
  if ('height' in shape) {
    shape // Type is Rectangle_0302
    return shape.width * shape.height
  } else {
    shape // Type is Square_0302
    return shape.width * shape.width
  }
}
