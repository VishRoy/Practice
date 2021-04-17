/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    if(arr == null || arr.length === 0){
        return false
    }
    for(let i=0;i<arr.length;i++){
        for(let j=arr.length - 1; j> 0; j--){
            if((arr[i] === 2* arr[j] || arr[j] == 2* arr[i]) && i !== j){
                return true
            }
        }
    }
    return false;
};