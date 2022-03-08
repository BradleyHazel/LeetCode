/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length<2){
        return false
    }
	// pull in the open in order and match them to the close
    let openQueue = [];
    let closeQueue =[];
    for(param in s){
        if(s[param] == `{`){
            openQueue.push(s[param])
        }
        else if(s[param] == `[`){
            openQueue.push(s[param])
        }
        else if(s[param] == `(`){
            openQueue.push(s[param])
        }
        else if(s[param] == `}`){
            if(openQueue.pop() == `{`){
            }
            else{
                return false
            }
        }
        else if(s[param] == `]`){
            if(openQueue.pop() == `[`){
            }
            else{
                return false
            }
        }
        else if(s[param] == `)`){
            if(openQueue.pop() == `(`){   
            }
            else{
                return false
            }
        }   
    }
    if(openQueue.length>=1){
        return false
    }
    else{
    return true
    }
};