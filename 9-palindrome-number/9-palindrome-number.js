/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let result = true;
    x = x.toString();
    i=0;
    y=x.length-1;
    while(i<Math.ceil(x.length/2)){
        if(x[i] == x[y]){
    
        }
        else{
            return result = false;
        }
        i +=1;
        y -=1;
          
          }
    return result
    
};