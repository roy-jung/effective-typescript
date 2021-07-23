interface Room_1106 {
  numDoors: number
  ceilingHeightFt: number
}
function setDarkMode_1106() {}
interface Options_1106 {
  title: string
  darkMode?: boolean
}
const o_1106: Options_1106 = { darkmode: true, title: 'Ski Free' }
// ~~~~~~~~ 'darkmode' does not exist in type 'Options'...
