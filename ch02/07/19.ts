type T_0719 = Exclude<string | Date, string | number> // Type is Date
type NonZeroNums_0719 = Exclude<number, 0> // Type is still just number
