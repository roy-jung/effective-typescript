type TState_1308 = {
  name: string
  capital: string
}
interface IState_1308 {
  name: string
  capital: string
}
interface IStateWithPop_1308 extends TState_1308 {
  population: number
}
type TStateWithPop_1308 = IState_1308 & { population: number }
