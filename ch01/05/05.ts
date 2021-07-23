interface Person_0505 {
  firstName: string
  last: string
}
const formatName_0505 = (p: Person) => `${p.firstName} ${p.last}`
const formatNameAny_0505 = (p: any) => `${p.first} ${p.last}`
