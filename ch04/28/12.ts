interface RequestPending_2812 {
  state: 'pending';
}
interface RequestError_2812 {
  state: 'error';
  error: string;
}
interface RequestSuccess_2812 {
  state: 'ok';
  pageText: string;
}
type RequestState_2812 = RequestPending_2812 | RequestError_2812 | RequestSuccess_2812;

interface State_2812 {
  currentPage: string;
  requests: {[page: string]: RequestState_2812};
}
function getUrlForPage_2812(p: string) { return ''; }
interface CockpitControls_2812 {
  /** Angle of the left side stick in degrees, 0 = neutral, + = forward */
  leftSideStick: number;
  /** Angle of the right side stick in degrees, 0 = neutral, + = forward */
  rightSideStick: number;
}
function getStickSetting_2812(controls: CockpitControls_2812) {
  const {leftSideStick, rightSideStick} = controls;
  if (leftSideStick === 0) {
    return rightSideStick;
  } else if (rightSideStick === 0) {
    return leftSideStick;
  }
  if (Math.abs(leftSideStick - rightSideStick) < 5) {
    return (leftSideStick + rightSideStick) / 2;
  }
  // ???
}
