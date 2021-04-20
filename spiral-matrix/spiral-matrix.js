/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let rowBegin = 0;
    let rowEnd = matrix.length - 1
    
    let columnBegin = 0;
    let columnEnd = matrix[0].length - 1
    
    let output = []
    
    while(rowBegin <= rowEnd && columnBegin <= columnEnd){
        for(let i = columnBegin ; i<= columnEnd; i++){
            output.push(matrix[rowBegin][i])
        }
        rowBegin++
        
        for(let i= rowBegin; i<= rowEnd; i++){
            output.push(matrix[i][columnEnd])
        }
        columnEnd--
        
        if(rowBegin <= rowEnd){
            for(let i=columnEnd; i>= columnBegin;i--){
                output.push(matrix[rowEnd][i])
            }
        }
        rowEnd --
        
        if(columnBegin <= columnEnd){
            for(let i=rowEnd; i>= rowBegin;i--){
                output.push(matrix[i][columnBegin])
            }
        }
        columnBegin++
    }
    
    return output
};