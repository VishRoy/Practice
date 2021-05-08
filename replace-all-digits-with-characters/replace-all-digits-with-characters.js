/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    return s.split("").map((w,i) => {
      if(isNaN(w)) return w
      else return String.fromCharCode(s[i-1].charCodeAt(0)+parseInt(w))
    }).join("")
};