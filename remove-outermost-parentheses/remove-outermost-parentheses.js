/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let result='';
    let count=0;
    
    for(char of S){
        
       if(char==="(" && count>0){
           result+=char;
       }
        if(char=="("){
            count++;
        }
        if(char===")" && count>1){
            result+=char;
        }
        if(char===")"){
            count--;
        }
    }
    
   return result;
};