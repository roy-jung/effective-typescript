interface Room_1104 {
  numDoors: number
  ceilingHeightFt: number
}
function setDarkMode_1104() {}
interface Options_1104 {
  title: string
  darkMode?: boolean
}
function createWindow_1104(options: Options_1104) {
  if (options.darkMode) {
    setDarkMode()
  }
  // ...
}
createWindow_1104({
  title: 'Spider Solitaire',
  darkmode: true,
  // ~~~~~~~~~~~~~ Object literal may only specify known properties, but
  //               'darkmode' does not exist in type 'Options'.
  //               Did you mean to write 'darkMode'?
})
