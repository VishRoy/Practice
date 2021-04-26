/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let oddCount = 0, evenCount = 0;
    position.forEach(x => x%2 == 0 ? evenCount++ : oddCount++);
     return Math.min(oddCount, evenCount)
};