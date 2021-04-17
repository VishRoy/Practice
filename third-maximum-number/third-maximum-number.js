/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let thirdMax = -Infinity;
  let secondMax = -Infinity;
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    if (num > max) {
      thirdMax = secondMax;
      secondMax = max;
      max = num;
    } else if (num < max && num > secondMax) {
      thirdMax = secondMax;
      secondMax = num;
    } else if (num < secondMax && num > thirdMax) {
      thirdMax = num;
    }
  }

  return thirdMax === -Infinity ? max : thirdMax; 
};