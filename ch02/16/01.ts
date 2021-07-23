const xs_1601 = [1, 2, 3]
const x0_1601 = xs_1601[0] // OK
const x1_1601 = xs_1601['1']
// ~~~ Element implicitly has an 'any' type
//      because index expression is not of type 'number'

function get_1601<T>(array: T[], k: string): T {
  return array[k]
  // ~ Element implicitly has an 'any' type
  //   because index expression is not of type 'number'
}
