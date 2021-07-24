function extent_3105(nums: number[]) {
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
const [min_3105, max_3105] = extent_3105([0, 1, 2])!;
const span_3105 = max_3105 - min_3105;  // OK
