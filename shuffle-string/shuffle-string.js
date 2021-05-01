/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let result = [];
    indices.forEach((num,index) => {
        result[num] = s[index];
    })
    return result.join('');
};