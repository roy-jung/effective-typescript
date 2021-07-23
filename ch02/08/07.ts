interface Person_0807 {
  first: string
  last: string
}
const p_0807: Person_0807 = { first: 'Jane', last: 'Jacobs' }
//    ------                --------------------------------- Values
//            ----------- Type
function email_0807(p: Person_0807, subject: string, body: string): Response {
  //     ---------- -               -------          ----  Values
  //                   -----------           ------        ------   -------- Types
  // COMPRESS
  return new Response()
  // END
}

class Cylinder_0807 {
  radius = 1
  height = 1
}

function calculateVolume_0807(shape: unknown) {
  if (shape instanceof Cylinder_0807) {
    shape // OK, type is Cylinder_0807
    shape.radius // OK, type is number
  }
}
type T1_0807 = typeof p_0807 // Type is Person_0807
type T2_0807 = typeof email_0807
// Type is (p: Person_0807, subject: string, body: string) => Response

const v1_0807 = typeof p_0807 // Value is "object"
const v2_0807 = typeof email_0807 // Value is "function"
