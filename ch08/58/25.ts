async function getJSON_5825(url: string) {
  const response = await fetch(url)
  return response.json()
}
