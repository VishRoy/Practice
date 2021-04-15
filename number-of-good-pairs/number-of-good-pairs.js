/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let map = {}
    let count = 0
    nums.forEach(num => {
        if(map[num]) {
            count += map[num]
            map[num]++
        }
        else map[num] = 1
    })
    return count
};