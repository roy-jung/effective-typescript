interface RequestPending_2806 {
  state: 'pending';
}
interface RequestError_2806 {
  state: 'error';
  error: string;
}
interface RequestSuccess_2806 {
  state: 'ok';
  pageText: string;
}
type RequestState_2806 = RequestPending_2806 | RequestError_2806 | RequestSuccess_2806;

interface State_2806 {
  currentPage: string;
  requests: {[page: string]: RequestState_2806};
}
