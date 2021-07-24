interface State_2803 {
  pageText: string;
  isLoading: boolean;
  error?: string;
}
declare let currentPage_2803: string;
function renderPage_2803(state: State_2803) {
  if (state.error) {
    return `Error! Unable to load ${currentPage_2803}: ${state.error}`;
  } else if (state.isLoading) {
    return `Loading ${currentPage_2803}...`;
  }
  return `<h1>${currentPage_2803}</h1>\n${state.pageText}`;
}
