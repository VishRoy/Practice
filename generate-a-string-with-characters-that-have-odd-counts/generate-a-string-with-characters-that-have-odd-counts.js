/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let s = ''
    if(n % 2 === 0) s = 'a'.repeat(n-1) + 'b'
    else s= 'a'.repeat(n)
    return s
};