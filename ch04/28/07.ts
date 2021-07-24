interface RequestPending_2807 {
  state: 'pending';
}
interface RequestError_2807 {
  state: 'error';
  error: string;
}
interface RequestSuccess_2807 {
  state: 'ok';
  pageText: string;
}
type RequestState_2807 = RequestPending_2807 | RequestError_2807 | RequestSuccess_2807;

interface State_2807 {
  currentPage: string;
  requests: {[page: string]: RequestState_2807};
}
function getUrlForPage_2807(p: string) { return ''; }
function renderPage_2807(state: State_2807) {
  const {currentPage} = state;
  const requestState = state.requests[currentPage];
  switch (requestState.state) {
    case 'pending':
      return `Loading ${currentPage}...`;
    case 'error':
      return `Error! Unable to load ${currentPage}: ${requestState.error}`;
    case 'ok':
      return `<h1>${currentPage}</h1>\n${requestState.pageText}`;
  }
}

async function changePage_2807(state: State_2807, newPage: string) {
  state.requests[newPage] = {state: 'pending'};
  state.currentPage = newPage;
  try {
    const response = await fetch(getUrlForPage_2807(newPage));
    if (!response.ok) {
      throw new Error(`Unable to load ${newPage}: ${response.statusText}`);
    }
    const pageText = await response.text();
    state.requests[newPage] = {state: 'ok', pageText};
  } catch (e) {
    state.requests[newPage] = {state: 'error', error: '' + e};
  }
}
