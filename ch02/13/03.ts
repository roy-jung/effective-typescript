type TState_1303 = {
  name: string
  capital: string
}
interface IState_1303 {
  name: string
  capital: string
}
const wyoming_1303: TState_1303 = {
  name: 'Wyoming',
  capital: 'Cheyenne',
  population: 500_000,
  // ~~~~~~~~~~~~~~~~~~ Type ... is not assignable to type 'TState'
  //                    Object literal may only specify known properties, and
  //                    'population' does not exist in type 'TState'
}
