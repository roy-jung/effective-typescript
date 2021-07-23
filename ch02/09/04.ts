interface Person_0904 {
  name: string
}
const people_0904 = ['alice', 'bob', 'jan'].map(name => ({ name }))
// { name: string; }[]... but we want Person_0904[]
