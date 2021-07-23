interface Person_0903 {
  name: string
}
const alice_0903: Person_0903 = {
  name: 'Alice',
  occupation: 'TypeScript developer',
  // ~~~~~~~~~ Object literal may only specify known properties
  //           and 'occupation' does not exist in type 'Person_0903'
}
const bob = {
  name: 'Bob',
  occupation: 'JavaScript developer',
} as Person_0903 // No error
