/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    return str.replace(/[A-Z]/g,function(b){return String.fromCharCode(b.charCodeAt()+32)})
};