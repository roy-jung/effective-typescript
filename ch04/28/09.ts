interface RequestPending_2809 {
  state: 'pending';
}
interface RequestError_2809 {
  state: 'error';
  error: string;
}
interface RequestSuccess_2809 {
  state: 'ok';
  pageText: string;
}
type RequestState_2809 = RequestPending_2809 | RequestError_2809 | RequestSuccess_2809;

interface State_2809 {
  currentPage: string;
  requests: {[page: string]: RequestState_2809};
}
function getUrlForPage_2809(p: string) { return ''; }
interface CockpitControls_2809 {
  /** Angle of the left side stick in degrees, 0 = neutral, + = forward */
  leftSideStick: number;
  /** Angle of the right side stick in degrees, 0 = neutral, + = forward */
  rightSideStick: number;
}
function getStickSetting_2809(controls: CockpitControls_2809) {
  return controls.leftSideStick;
}
