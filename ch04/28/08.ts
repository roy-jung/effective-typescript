interface RequestPending_2808 {
  state: 'pending';
}
interface RequestError_2808 {
  state: 'error';
  error: string;
}
interface RequestSuccess_2808 {
  state: 'ok';
  pageText: string;
}
type RequestState_2808 = RequestPending_2808 | RequestError_2808 | RequestSuccess_2808;

interface State_2808 {
  currentPage: string;
  requests: {[page: string]: RequestState_2808};
}
function getUrlForPage_2808(p: string) { return ''; }
interface CockpitControls_2808 {
  /** Angle of the left side stick in degrees, 0 = neutral, + = forward */
  leftSideStick: number;
  /** Angle of the right side stick in degrees, 0 = neutral, + = forward */
  rightSideStick: number;
}
