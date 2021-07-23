function turnLightOn_0309() {}
function turnLightOff_0309() {}
function setLightSwitch_0309(value: boolean) {
  switch (value) {
    case true:
      turnLightOn_0309()
      break
    case false:
      turnLightOff_0309()
      break
    default:
      console.log(`I'm afraid I can't do that.`)
  }
}
interface LightApiResponse_0309 {
  lightSwitchValue: boolean
}
async function setLight_0309() {
  const response = await fetch('/light')
  const result: LightApiResponse_0309 = await response.json()
  setLightSwitch_0309(result.lightSwitchValue)
}
