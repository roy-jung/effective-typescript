// HIDE
export const foo = true
const states_0105 = [
  { name: 'Alabama', capital: 'Montgomery' },
  { name: 'Alaska', capital: 'Juneau' },
  { name: 'Arizona', capital: 'Phoenix' },
  // ...
]
// END

for (const state of states_0105) {
  console.log(state.capitol)
  // ~~~~~~~ Property 'capitol' does not exist on type
  //         '{ name: string; capital: string; }'.
  //         Did you mean 'capital'?
}
