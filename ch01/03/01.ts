interface Square_0301 {
  width: number
}
interface Rectangle_0301 extends Square_0301 {
  height: number
}
type Shape_0301 = Square_0301 | Rectangle_0301

function calculateArea_0301(shape: Shape_0301) {
  if (shape instanceof Rectangle_0301) {
    // ~~~~~~~~~ 'Rectangle_0301' only refers to a type,
    //           but is being used as a value here
    return shape.width * shape.height
    //         ~~~~~~ Property 'height' does not exist
    //                on type 'Shape'
  } else {
    return shape.width * shape.width
  }
}
