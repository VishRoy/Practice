/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let a = 0;
    let sum = 0
    for(let i=0;i<nums.length;i++){
        sum += nums[i]
        nums[a] = sum
        a++
    }
    return nums
};