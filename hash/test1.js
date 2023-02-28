function solution(nums) {
  const set = new Set(nums);
  const arr = [...set];
  const have = nums.length / 2;

  return Math.min(arr.length, have);
}
