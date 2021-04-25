/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    n = n.toString();
    let product = 1;
    let sum = 0;

    for (let i in n) {
      product *= parseInt(n[i]);
      sum += parseInt(n[i]);
    }

    return product - sum;
};