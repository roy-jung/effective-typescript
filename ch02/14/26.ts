interface Name_1426 {
  first: string
  last: string
}
type DancingDuo_1426<T extends Name_1426> = [T, T]
type FirstLast_1426 = Pick<Name_1426, 'first' | 'last'> // OK
type FirstMiddle_1426 = Pick<Name_1426, 'first' | 'middle'>
// ~~~~~~~~~~~~~~~~~~
// Type '"middle"' is not assignable
// to type '"first" | "last"'
