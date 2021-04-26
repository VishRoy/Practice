/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     const MAX = Math.pow(2, 31) - 1;
     const MIN = -1 * Math.pow(2, 31);
     let arr = Math.abs(x).toString().split('');
     const reversed = Math.sign(x) * Number(arr.reverse().join(''));
     return reversed < MIN || reversed > MAX ? 0 : reversed;
};