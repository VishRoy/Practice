/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
      let startAmount = 1, nextStartAmount = 1;
    let total = 0;
    let days = 7;
    
    for(let i = 0; i < n; i++) {
        if(days !== 0) {
            total += startAmount;
            startAmount++;
            days--;
        } else {
            nextStartAmount++;
            startAmount = nextStartAmount;
            days = 7;
            i--;
        }
    }
    
    return total;
};