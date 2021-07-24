interface RequestPending_2813 {
  state: 'pending';
}
interface RequestError_2813 {
  state: 'error';
  error: string;
}
interface RequestSuccess_2813 {
  state: 'ok';
  pageText: string;
}
type RequestState_2813 = RequestPending_2813 | RequestError_2813 | RequestSuccess_2813;

interface State_2813 {
  currentPage: string;
  requests: {[page: string]: RequestState_2813};
}
function getUrlForPage_2813(p: string) { return ''; }
interface CockpitControls_2813 {
  /** Angle of the left side stick in degrees, 0 = neutral, + = forward */
  leftSideStick: number;
  /** Angle of the right side stick in degrees, 0 = neutral, + = forward */
  rightSideStick: number;
}
function getStickSetting_2813(controls: CockpitControls_2813) {
  return (controls.leftSideStick + controls.rightSideStick) / 2;
}
