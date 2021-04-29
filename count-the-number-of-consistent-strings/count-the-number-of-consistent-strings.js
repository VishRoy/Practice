/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let numConsistent = 0;
    const regex = new RegExp(`[^${allowed}]`);

    for (let word of words){
        if (word.match(regex) == null)
            ++numConsistent;
        }
    return numConsistent;
};
