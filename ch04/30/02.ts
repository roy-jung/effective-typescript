// HIDE
type Color_3002 = { r: number; g: number; b: number };
// END
/** Get the foreground color for the application or a specific page. */
function getForegroundColor_3002(page?: string): Color_3002 {
  // COMPRESS
  return page === 'login' ? {r: 127, g: 127, b: 127} : {r: 0, g: 0, b: 0};
  // END
}

