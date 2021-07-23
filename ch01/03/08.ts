function turnLightOn_0308() {}
function turnLightOff_0308() {}
function setLightSwitch_0308(value: boolean) {
  switch (value) {
    case true:
      turnLightOn()
      break
    case false:
      turnLightOff()
      break
    default:
      console.log(`I'm afraid I can't do that.`)
  }
}
