interface Person_0907 {
  name: string
}
const people_0907 = ['alice', 'bob', 'jan'].map(name => {
  const person: Person_0907 = { name }
  return person
}) // Type is Person[]_0907
