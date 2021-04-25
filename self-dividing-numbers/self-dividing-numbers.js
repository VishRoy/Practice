/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let output = []
    for(let i=left;i<=right;i++){
        let push = true
        for(let num of i.toString()){
            if((i % parseInt(num)) || !parseInt(num)){ push = false ;break; }
        }
        if(push) output.push(i)
    }
    return output
};