/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    if(A === null || A.length == 0){ return []}
    let a = 0
    for(let i = 0;i<A.length;i++){
        if(A[i]%2 === 0){
            [A[i],A[a]] = [A[a],A[i]]
            a++
        }
    }
    return A
};