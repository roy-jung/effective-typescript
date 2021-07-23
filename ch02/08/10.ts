interface Person_0810 {
  first: string
  last: string
}
const p_0810: Person_0810 = { first: 'Jane', last: 'Jacobs' }
//    ------                --------------------------------- Values
//            ----------- Type
function email_0810(p: Person_0810, subject: string, body: string): Response {
  //     ---------- -               -------          ----  Values
  //                   -----------           ------        ------   -------- Types
  // COMPRESS
  return new Response()
  // END
}

class Cylinder_0810 {
  radius = 1
  height = 1
}

function calculateVolume_0810(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape // OK, type is Cylinder
    shape.radius // OK, type is number
  }
}
const v_0810 = typeof Cylinder_0810 // Value is "function"
type T_0810 = typeof Cylinder_0810 // Type is typeof Cylinder
type C_0810 = InstanceType<typeof Cylinder_0810> // Type is Cylinder
