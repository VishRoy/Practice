/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    const binary = n.toString(2).substring(1)
    let maxGap = 0
    let gap = 0

    for (let num of binary) {
    gap++;
    if (num === '1') {
      maxGap = Math.max(maxGap, gap);
      gap = 0;
    }
  }

  return maxGap;
};