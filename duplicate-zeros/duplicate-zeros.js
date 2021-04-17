/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    
    let count = 0;
    let length = arr.length;
    
    for(let i = 0; i < length; i++) {
        if(arr[i] === 0) {
            count++;
        }
    }
    
    let i = length - 1;
    let j = length + count - 1;
    
    while(j !== i) {
        if(arr[i] === 0){
            if(j < length){
               arr[j] = arr[i];  
            }
            
            j--;
        }
        
        if(j < length) {
            arr[j] = arr[i];
        }

        i--;
        j--;
    }
    
           
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === 0) {
//             for(let j = arr.length - 1; j > i; j--) {
//                 arr[j] = arr[j-1]
//             }
//             i++
//         }     
//     }
    
};