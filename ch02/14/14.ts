interface SaveAction_1414 {
  type: 'save'
  // ...
}
interface LoadAction_1414 {
  type: 'load'
  // ...
}
type Action_1414 = SaveAction_1414 | LoadAction_1414
type ActionType_1414 = Action_1414['type'] // Type is "save" | "load"
