class Square_0304 {
  constructor(public width: number) {}
}
class Rectangle_0304 extends Square_0304 {
  constructor(public width: number, public height: number) {
    super(width)
  }
}
type Shape_0304 = Square_0304 | Rectangle_0304

function calculateArea(shape: Shape_0304) {
  if (shape instanceof Rectangle_0304) {
    shape // Type is Rectangle_0304
    return shape.width * shape.height
  } else {
    shape // Type is Square_0304
    return shape.width * shape.width // OK
  }
}
