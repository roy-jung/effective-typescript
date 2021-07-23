type TState_1305 = {
  name: string
  capital: string
}
interface IState_1305 {
  name: string
  capital: string
}
type TFn_1305 = (x: number) => string
interface IFn_1305 {
  (x: number): string
}

const toStrT_1305: TFn_1305 = x => '' + x // OK
const toStrI_1305: IFn_1305 = x => '' + x // OK
