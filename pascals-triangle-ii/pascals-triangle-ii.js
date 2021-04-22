/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let output = []
    let firstRow = [1]
    
    output.push(firstRow)
    
    if(rowIndex == 0) return firstRow
    
    for(let i=1;i<=rowIndex;i++){
        let prev_row = output[i-1]
        let row = []
        
        row.push(1)
         for(let j=1; j<i ;j++){
            row.push(prev_row[j-1] + prev_row[j])
        }
        row.push(1)
        output.push(row)
    }
    return output[rowIndex]
};