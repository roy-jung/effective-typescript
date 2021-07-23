// HIDE
export const foo = true
interface State {
  name: string
  capital: string
}
// END

const states_0108: State[] = [
  { name: 'Alabama', capital: 'Montgomery' },
  { name: 'Alaska', capitol: 'Juneau' },
  // ~~~~~~~~~~~~~~~~~ Did you mean to write 'capital'?
  { name: 'Arizona', capital: 'Phoenix' },
  // ...
]
