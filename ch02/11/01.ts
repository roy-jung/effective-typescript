interface Room_1101 {
  numDoors: number
  ceilingHeightFt: number
}
const r_1101: Room_1101 = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present',
  // ~~~~~~~~~~~~~~~~~~ Object literal may only specify known properties,
  //                    and 'elephant' does not exist in type 'Room'
}
