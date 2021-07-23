const checkedFetch_1209: typeof fetch = async (input, init) => {
  const response = await fetch(input, init)
  if (!response.ok) {
    throw new Error('Request failed: ' + response.status)
  }
  return response
}
