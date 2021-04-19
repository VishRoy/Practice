/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let index = -1;
    let sum = 0
    let left_sum = 0
    for(let i=0;i<nums.length;i++){
        sum += nums[i]
    }
    
    for(let j=0;j<nums.length;j++){
        if(j != 0) left_sum += nums[j-1]
        if(sum - left_sum - nums[j] == left_sum){
            return j
        }
    }
    return -1
};