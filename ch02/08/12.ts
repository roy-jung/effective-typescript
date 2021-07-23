interface Person_0812 {
  first: string
  last: string
}
const p_0812: Person_0812 = { first: 'Jane', last: 'Jacobs' }
//    ------                --------------------------------- Values
//            ----------- Type
function email_0812(p: Person_0812, subject: string, body: string): Response {
  //     ---------- -               -------          ----  Values
  //                   -----------           ------        ------   -------- Types
  // COMPRESS
  return new Response()
  // END
}

class Cylinder_0812 {
  radius = 1
  height = 1
}

function calculateVolume_0812(shape: unknown) {
  if (shape instanceof Cylinder_0812) {
    shape // OK, type is Cylinder_0812
    shape.radius // OK, type is number
  }
}
const v_0812 = typeof Cylinder_0812 // Value is "function"
type T_0812 = typeof Cylinder_0812 // Type is typeof Cylinder_0812
type PersonEl_0812 = Person['first' | 'last'] // Type is string
type Tuple_0812 = [string, number, Date]
type TupleEl_0812 = Tuple_0812[number] // Type is string | number | Date
