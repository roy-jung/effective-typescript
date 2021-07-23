interface Person_0809 {
  first: string
  last: string
}
const p_0809: Person_0809 = { first: 'Jane', last: 'Jacobs' }
//    -           --------------------------------- Values
//       ------ Type
function email_0809(p: Person_0809, subject: string, body: string): Response {
  //     ----- -          -------          ----  Values
  //              ------           ------        ------   -------- Types
  // COMPRESS
  return new Response()
  // END
}

class Cylinder_0809 {
  radius = 1
  height = 1
}

function calculateVolume_0809(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape // OK, type is Cylinder
    shape.radius // OK, type is number
  }
}
const v_0809 = typeof Cylinder_0809 // Value is "function"
type T_0809 = typeof Cylinder_0809 // Type is typeof Cylinder
declare let fn_0809: T_0809
const c_0809 = new fn_0809() // Type is Cylinder
