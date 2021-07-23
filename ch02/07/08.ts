interface Identified_0708 {
  id: string
}
interface Person_0708 {
  name: string
}
interface Lifespan_0708 {
  birth: Date
  death?: Date
}
type PersonSpan_0708 = Person_0708 & Lifespan_0708
