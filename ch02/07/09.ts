interface Identified_0709 {
  id: string
}
interface Person_0709 {
  name: string
}
interface Lifespan_0709 {
  birth: Date
  death?: Date
}
type PersonSpan_0709 = Person_0709 & Lifespan_0709
const ps: PersonSpan_0709 = {
  name: 'Alan Turing',
  birth: new Date('1912/06/23'),
  death: new Date('1954/06/07'),
} // OK
