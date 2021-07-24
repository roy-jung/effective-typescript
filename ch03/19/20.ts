const cache_0320: {[ticker: string]: number} = {};
function getQuote_0320(ticker: string): Promise<number> {
  if (ticker in cache_0320) {
    return cache_0320[ticker];
        // ~~~~~~~~~~~~~ Type 'number' is not assignable to 'Promise<number>'
  }
  // COMPRESS
  return Promise.resolve(0);
  // END
}

