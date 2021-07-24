interface RequestPending_2810 {
  state: 'pending';
}
interface RequestError_2810 {
  state: 'error';
  error: string;
}
interface RequestSuccess_2810 {
  state: 'ok';
  pageText: string;
}
type RequestState_2810 = RequestPending_2810 | RequestError_2810 | RequestSuccess_2810;

interface State_2810 {
  currentPage: string;
  requests: {[page: string]: RequestState_2810};
}
function getUrlForPage_2810(p: string) { return ''; }
interface CockpitControls_2810 {
  /** Angle of the left side stick in degrees, 0 = neutral, + = forward */
  leftSideStick: number;
  /** Angle of the right side stick in degrees, 0 = neutral, + = forward */
  rightSideStick: number;
}
function getStickSetting_2810(controls: CockpitControls_2810) {
  const {leftSideStick, rightSideStick} = controls;
  if (leftSideStick === 0) {
    return rightSideStick;
  }
  return leftSideStick;
}
