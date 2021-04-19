/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let j= digits.length-1 ;j >= 0 ; j--){
        if(digits[j] !== 9){
            ++digits[j]
            break;
        }
        else{
            digits[j] = 0
        }
    }
     if (digits[0] === 0) {
        digits.unshift(1);
    }
        return digits
};