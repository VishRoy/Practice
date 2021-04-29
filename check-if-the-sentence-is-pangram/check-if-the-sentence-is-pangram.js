/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
     let set = new Set();
     for (let val of sentence) {
            if (/[a-z]/.test(val)) set.add(val)
     }
     return set.size === 26 ? true : false;
};