interface State_2805 {
  pageText: string;
  isLoading: boolean;
  error?: string;
}
declare let currentPage_2805: string;
function getUrlForPage_2805(p: string) { return ''; }
async function changePage_2805(state: State_2805, newPage: string) {
  state.isLoading = true;
  try {
    const response = await fetch(getUrlForPage_2805(newPage));
    if (!response.ok) {
      throw new Error(`Unable to load ${newPage}: ${response.statusText}`);
    }
    const text = await response.text();
    state.isLoading = false;
    state.pageText = text;
  } catch (e) {
    state.error = '' + e;
  }
}
