interface Person_0905 {
  name: string
}
const people_0905 = ['alice', 'bob', 'jan'].map(name => ({ name } as Person_0905)) // Type is Person_0905[]
