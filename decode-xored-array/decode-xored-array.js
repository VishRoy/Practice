/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    return [first, ...encoded].map((v, i, a) => a[i] ^= (a[i - 1] || 0));
};