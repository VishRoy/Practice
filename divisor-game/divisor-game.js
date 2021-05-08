/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
     let isAliceWon = false
     while(n>1){
        isAliceWon=!isAliceWon;
        n--
      }
     return isAliceWon;
};