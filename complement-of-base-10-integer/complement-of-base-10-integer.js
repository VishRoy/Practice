/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
     let res = '';
     N = N.toString(2);
     for (let i = 0; i < N.length; i++) {
        res += N[i] ^ 1;
     }
    return parseInt(res, 2);
};