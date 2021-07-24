const cache_0319: {[ticker: string]: number} = {};
function getQuote_0319(ticker: string) {
  if (ticker in cache_0319) {
    return cache_0319[ticker];
  }
  return fetch(`https://quotes.example.com/?q=${ticker}`)
      .then(response => response.json())
      .then(quote => {
        cache_0319[ticker] = quote;
        return quote;
      });
}
function considerBuying_0319(x: any) {}
getQuote_0319('MSFT').then(considerBuying);
              // ~~~~ Property 'then' does not exist on type
              //        'number | Promise<any>'
              //      Property 'then' does not exist on type 'number'
