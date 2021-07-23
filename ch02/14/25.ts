interface Name_1425 {
  first: string
  last: string
}
type DancingDuo_1425<T extends Name_1425> = [T, T]
const dancingDuo_1425 = <T extends Name_1425>(x: DancingDuo_1425<T>) => x
const couple1_1425 = dancingDuo_1425([
  { first: 'Fred', last: 'Astaire' },
  { first: 'Ginger', last: 'Rogers' },
])
const couple2_1425 = dancingDuo_1425([
  { first: 'Bono' },
  // ~~~~~~~~~~~~~~
  { first: 'Prince' },
  // ~~~~~~~~~~~~~~~~
  //     Property 'last' is missing in type
  //     '{ first: string; }' but required in type 'Name'
])
