type Input_1312 = {
  /* ... */
}
type Output_1312 = {
  /* ... */
}
interface VariableMap_1312 {
  [name: string]: Input_1312 | Output_1312
}
type NamedVariable_1312 = (Input_1312 | Output_1312) & { name: string }
