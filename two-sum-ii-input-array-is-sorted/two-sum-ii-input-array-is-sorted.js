/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    if(numbers.length == 0 || numbers == null || target == null){
        return false;
    }
    let r = numbers.length - 1
    let i = 0 
    while( i < r){
        if(numbers[i] + numbers[r] == target){
            return [i+1,r+1]
        }
        if(numbers[i] + numbers[r] > target){
            r--
        }else{
            i++
        }
    }
};