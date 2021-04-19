/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let nums ; 
    for(let i=0; i < n; i++){
        nums = nums ^ start + 2*i
    }
    return nums
};