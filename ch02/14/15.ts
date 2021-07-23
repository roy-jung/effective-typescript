interface SaveAction_1415 {
  type: 'save'
  // ...
}
interface LoadAction_1415 {
  type: 'load'
  // ...
}
type Action_1415 = SaveAction_1415 | LoadAction_1415
type ActionRec_1415 = Pick<Action_1415, 'type'> // {type: "save" | "load"}
