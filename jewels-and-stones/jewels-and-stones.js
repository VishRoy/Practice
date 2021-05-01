/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
      const jewelsSet = new Set()
    let count = 0
    for (let i = 0; i < jewels.length; i++) {
        jewelsSet.add(jewels[i])
    }
    
    for (let i = 0; i < stones.length; i++) {
        if (jewelsSet.has(stones[i])) count++
    }
    
    return count
//      const REGEX = new RegExp(`[${jewels}]`,'g')
    
//      return stones.match(REGEX) ? stones.match(REGEX).length : 0;
};
