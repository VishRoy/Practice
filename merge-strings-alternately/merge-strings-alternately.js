/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged = [];
    let wLong = word1.length < word2.length ? word2 : word1;

    for (let i = 0; i < wLong.length;i++) {
        if(word1.length > i) {
            merged.push(word1[i]);
        }
        if(word2.length > i) {
            merged.push(word2[i]);
        }
    }
    return merged.join('');
};