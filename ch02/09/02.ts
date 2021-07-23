interface Person_0902 {
  name: string
}
const alice_0902: Person_0902 = {}
// ~~~~~ Property 'name' is missing in type '{}'
//       but required in type 'Person'
const bob_0902 = {} as Person // No error
