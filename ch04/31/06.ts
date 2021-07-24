function extent_3106(nums: number[]) {
  let result: [number, number] | null = null;
  for (const num of nums) {
    if (!result) {
      result = [num, num];
    } else {
      result = [Math.min(num, result[0]), Math.max(num, result[1])];
    }
  }
  return result;
}
const range_3106 = extent_3106([0, 1, 2]);
if (range_3106) {
  const [min, max] = range_3106;
  const span = max - min;  // OK
}
