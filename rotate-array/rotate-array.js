/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// const rotate = (nums, k) => {
//   const copy = [...nums];
//   for (let i = 0; i < nums.length; i++) copy[(i + k) % nums.length] = nums[i];
//   for (let i = 0; i < nums.length; i++) nums[i] = copy[i];
//   return nums;
// };


const rotate = (nums, k) => {
  const reverse = (start = 0, end = nums.length - 1) => {
    while (start < end) {
        [nums[start++], nums[end--]] = [nums[end], nums[start]]
      // const temp = nums[start];
      // nums[start++] = nums[end];
      // nums[end--] = temp;
    }
  };
  k %= nums.length;
  reverse()// Reverse the entire array
  reverse(0, k - 1); // Reverse the first k elements
  reverse(k); // Reverse the rest
  return nums;
};