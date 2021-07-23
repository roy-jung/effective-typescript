interface SaveAction_1413 {
  type: 'save'
  // ...
}
interface LoadAction_1413 {
  type: 'load'
  // ...
}
type Action_1413 = SaveAction_1413 | LoadAction_1413
type ActionType_1413 = 'save' | 'load' // Repeated types!
