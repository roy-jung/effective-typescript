interface RequestPending_2811 {
  state: 'pending';
}
interface RequestError_2811 {
  state: 'error';
  error: string;
}
interface RequestSuccess_2811 {
  state: 'ok';
  pageText: string;
}
type RequestState_2811 = RequestPending_2811 | RequestError_2811 | RequestSuccess_2811;

interface State_2811 {
  currentPage: string;
  requests: {[page: string]: RequestState_2811};
}
function getUrlForPage_2811(p: string) { return ''; }
interface CockpitControls_2811 {
  /** Angle of the left side stick in degrees, 0 = neutral, + = forward */
  leftSideStick: number;
  /** Angle of the right side stick in degrees, 0 = neutral, + = forward */
  rightSideStick: number;
}
function getStickSetting_2811(controls: CockpitControls_2811) {
  const {leftSideStick, rightSideStick} = controls;
  if (leftSideStick === 0) {
    return rightSideStick;
  } else if (rightSideStick === 0) {
    return leftSideStick;
  }
  // ???
}
