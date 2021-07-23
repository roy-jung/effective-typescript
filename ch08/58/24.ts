function getJSON_5824(url: string) {
  return fetch(url).then(response => response.json())
}
function getJSONCallback_5824(url: string, cb: (result: unknown) => void) {
  // ...
}
