/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let coords = coordinates.split('')
    if((coords[0].match(/[aceg]/i) && (coords[1] % 2 !=0)) || 
       (coords[0].match(/[bdfh]/i) && (coords[1] % 2 ===0))){ 
       return false
    }else{
            return true
    }
};