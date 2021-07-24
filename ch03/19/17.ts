const cache_0317: {[ticker: string]: number} = {};
function getQuote_0317(ticker: string) {
  if (ticker in cache_0317) {
    return cache_0317[ticker];
  }
  return fetch(`https://quotes.example.com/?q=${ticker}`)
      .then(response => response.json())
      .then(quote => {
        cache_0317[ticker] = quote;
        return quote;
      });
}
