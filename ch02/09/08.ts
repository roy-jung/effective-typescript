interface Person_0908 {
  name: string
}
const people_0908 = ['alice', 'bob', 'jan'].map((name): Person_0908 => ({ name })) // Type is Person_0908[]
