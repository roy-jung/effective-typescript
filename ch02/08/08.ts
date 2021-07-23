interface Person_0808 {
  first: string
  last: string
}
const p_0808: Person_0808 = { first: 'Jane', last: 'Jacobs' }
//    ------                --------------------------------- Values
//            ----------- Type
function email_0808(p: Person_0808, subject: string, body: string): Response {
  //     ---------- -               -------          ----  Values
  //                   -----------           ------        ------   -------- Types
  // COMPRESS
  return new Response()
  // END
}

class Cylinder_0808 {
  radius = 1
  height = 1
}

function calculateVolume_0808(shape: unknown) {
  if (shape instanceof Cylinder_0808) {
    shape // OK, type is Cylinder
    shape.radius // OK, type is number
  }
}
const v_0808 = typeof Cylinder_0808 // Value is "function"
type T_0808 = typeof Cylinder_0808 // Type is typeof Cylinder
