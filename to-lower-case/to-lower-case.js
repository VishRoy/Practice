/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
//     return str.replace(/[A-Z]/g,function(b){return String.fromCharCode(b.charCodeAt()+32)})
    
    let answer = "";
  for (const i of str) {
    if (65 <= i.charCodeAt() && i.charCodeAt() <= 90) {
      answer += String.fromCharCode(i.charCodeAt() + 32);
    } else {
      answer += i;
    }
  }

  return answer;
};
