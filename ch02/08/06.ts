interface Person_0806 {
  first: string
  last: string
}
const p_0806: Person_0806 = { first: 'Jane', last: 'Jacobs' }
//    ------                --------------------------------- Values
//            ----------- Type
function email_0806(p: Person_0806, subject: string, body: string): Response {
  //     ---------- -               -------          ----  Values
  //                   -----------           ------        ------   -------- Types
  // COMPRESS
  return new Response()
  // END
}

class Cylinder_0806 {
  radius = 1
  height = 1
}

function calculateVolume_0806(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape // OK, type is Cylinder
    shape.radius // OK, type is number
  }
}
