let str = "JAvaScript"
let startSpcChar = function(str) {
    if( str.length < 4 ){ 
        return false;
    } else if( str.length >= 4 && str.substring(0,4).toLowerCase() == "java" ){
        return true;
    } else {
        return false;
    }       
}
console.log(startSpcChar(str))