/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
      /*
    *   find max and min values in A
    *   minimize max value (ie. subtract K)
    *   maximimze min value (ie. add K)
    *   find difference b/n max and min
    *   if difference is negative, return 0 or diff. otherwise
    */
    
    return Math.max(...A) - K - (Math.min(...A) + K) < 0
    ? 0
    : Math.max(...A) - K - (Math.min(...A) + K);
};