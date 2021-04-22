/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
    if(target== null || nums.length == 0) return 0
    let result = Number.MAX_SAFE_INTEGER;
    
    let left = 0
    let currSum = 0
    
    for(let i=0;i<nums.length;i++){
        currSum += nums[i]
        
        while(currSum >= target){
            result = Math.min(result, i+1 - left)
            currSum -= nums[left]
            left++
        }
    }
    return result != Number.MAX_SAFE_INTEGER ? result : 0
};