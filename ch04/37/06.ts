type SortedList_3706<T> = T[] & {_brand: 'sorted'};

function isSorted_3706<T>(xs: T[]): xs is SortedList_3706<T> {
  for (let i = 1; i < xs.length; i++) {
    if (xs[i] > xs[i - 1]) {
      return false;
    }
  }
  return true;
}

function binarySearch_3706<T>(xs: SortedList_3706<T>, x: T): boolean {
  // COMPRESS
  return true;
  // END
}

