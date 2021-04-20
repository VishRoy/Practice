/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let m = mat.length
    let n = mat[0].length
    let result = []
    let r = 0
    let c = 0
    
    for(let i=0;i< m*n ; i++){
        result[i] = mat[r][c]
        
        if((r+c)%2 == 0){
            if(c == n-1){
                r++
            }else if(r==0){
                c++
            }else{
                r--;
                c++
            }
        }else{
            if(r == m-1){
                c++
            }else if(c == 0){
                r++
            }else{
                c--;
                r++
            }
        }
    }
    return result
};