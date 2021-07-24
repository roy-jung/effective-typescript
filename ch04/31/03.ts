function extent_3103(nums: number[]) {
  let min, max;
  for (const num of nums) {
    if (!min) {
      min = num;
      max = num;
    } else {
      min = Math.min(min, num);
      max = Math.max(max, num);
                  // ~~~ Argument of type 'number | undefined' is not
                  //     assignable to parameter of type 'number'
    }
  }
  return [min, max];
}
const [min_3103, max_3103] = extent_3103([0, 1, 2]);
const span_3103 = max_3103 - min_3103;
          // ~~~   ~~~ Object is possibly 'undefined'
