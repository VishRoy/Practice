/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let rowBegin = 0
    let rowEnd = n -1
    
    let columnBegin = 0;
    let columnEnd = n - 1
    
    let counter = 1
    
    let output = [];
    
  for (let i = 0; i < n; i++) {
    output[i] = new Array(n).fill(null)
  }
    
    while(rowBegin <= rowEnd && columnBegin <= columnEnd){
        for(let i= columnBegin ; i<=columnEnd;i++){
            output[rowBegin][i] = counter
            counter++
        }
        rowBegin++
        
        for(let i=rowBegin; i<= rowEnd;i++){
            output[i][columnEnd] = counter
            counter++ 
        }
        columnEnd--
        
        if(rowBegin <= rowEnd){
            for(let i=columnEnd; i>= columnBegin ;i--){
                output[rowEnd][i] = counter++
            }
        }
        
        rowEnd--
        
        if(columnBegin <= columnEnd){
             for(let i=rowEnd; i>= rowBegin ;i--){
                output[i][columnBegin] = counter++
            }
        }
        columnBegin++
    }
   return output
    
};