interface Person_0811 {
  first: string
  last: string
}
const p_0811: Person_0811 = { first: 'Jane', last: 'Jacobs' }
//    ------                --------------------------------- Values
//            ----------- Type
function email_0811(p: Person_0811, subject: string, body: string): Response {
  //     ---------- -               -------          ----  Values
  //                   -----------           ------        ------   -------- Types
  // COMPRESS
  return new Response()
  // END
}

class Cylinder_0811 {
  radius = 1
  height = 1
}

function calculateVolume_0811(shape: unknown) {
  if (shape instanceof Cylinder_0811) {
    shape // OK, type is Cylinder
    shape.radius // OK, type is number
  }
}
const v_0811 = typeof Cylinder_0811 // Value is "function"
type T_0811 = typeof Cylinder_0811 // Type is typeof Cylinder_0811
const first_0811: Person_0811['first'] = p['first'] // Or p.first
//    ----------                         ---------- Values
//                ----------- ------- Types
