/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if(arr == null || arr.length == 0){
        return false;
    }
    let rightMax = -1
    for(let j=arr.length - 1; j>=0 ; j--){
        let newMax = Math.max(rightMax, arr[j])
        arr[j] = rightMax
        rightMax = newMax
    }
    return arr
};