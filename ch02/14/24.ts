interface Name_1424 {
  first: string
  last: string
}
type DancingDuo_1424<T extends Name_1424> = [T, T]

const couple1_1424: DancingDuo_1424<Name_1424> = [
  { first: 'Fred', last: 'Astaire' },
  { first: 'Ginger', last: 'Rogers' },
] // OK
const couple2_1424: DancingDuo_1424<{ first: string }> = [
  // ~~~~~~~~~~~~~~~
  // Property 'last' is missing in type
  // '{ first: string; }' but required in type 'Name'
  { first: 'Sonny' },
  { first: 'Cher' },
]
