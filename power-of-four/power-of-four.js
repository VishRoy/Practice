/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfFour = function(n) {
//     if(n<1) return false
    
//     while(n !== 1){
//         if(n % 4 !== 0){
//             return false
//         }
//         n = n / 4
//     }
//     return true
// };


var isPowerOfFour = function(n) {
    if(n<1) return false
    let count = 0
    if((n & (n-1)) === 0){
        while(n > 1){
            n >>= 1  // JavaScript (Sign Preserving) Bitwise Right Shift (>>)
            count +=1
        }
         return (count%2 === 0) ? true : false
    }
    return false
};
