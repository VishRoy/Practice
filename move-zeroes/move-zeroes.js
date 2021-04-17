/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
     if(nums == null || nums.length == 0){
       return false
   }
    let a = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== 0){
            [nums[a], nums[i]] = [nums[i], nums[a]]
            a++
        }
    }
    return nums
};