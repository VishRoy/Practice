/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function(s) {
//     // return s.reverse()
//      for (let l = 0, r = s.length - 1; l < r; l++, r-- ) {
//         let tmp = s[l];
//         s[l] = s[r];
//         s[r] = tmp;
//     }
// };

var reverseString = function(s) {
    const length = Math.floor(s.length/2);
    let a = s.length - 1
    for ( let i = 0 ; i < length ; i++) {
         [s[i], s[a]] = [s[a], s[i]]
         a--
     }
    return s;  
};