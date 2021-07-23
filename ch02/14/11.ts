interface State_1411 {
  userId: string
  pageTitle: string
  recentFiles: string[]
  pageContents: string
}
type TopNavState_1411 = {
  [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k]
}
