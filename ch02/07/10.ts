interface Identified_0710 {
  id: string
}
interface Person_0710 {
  name: string
}
interface Lifespan_0710 {
  birth: Date
  death?: Date
}
type PersonSpan_0710 = Person_0710 & Lifespan_0710
type K_0710 = keyof (Person_0710 | Lifespan_0710) // Type is never
