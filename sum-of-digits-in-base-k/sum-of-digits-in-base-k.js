/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let res = n.toString(k);
    let sum = 0;
    for (const e of res) sum += Number(e);
    return sum;
};