const xs_1606 = [1, 2, 3]
function checkedAccess_1606<T>(xs: ArrayLike<T>, i: number): T {
  if (i < xs.length) {
    return xs[i]
  }
  throw new Error(`Attempt to access ${i} which is past end of array.`)
}
