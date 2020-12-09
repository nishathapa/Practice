let arr = [1,2,3,3,1,4,5]
let duplicate = function(arr){
    for (let i = 0; i < arr.length; i++){
        for( let j = i+1 ; j < arr.length; j++){
            if (arr[i] === arr[j]){
                return arr[i];
            }
        }
    }
    return -1;
}

// console.log(duplicate(arr));
 

let duplicateBySet = function(arr) {
    let x = new Set();
    for (let i = 0; i < arr.length; i++){
        if ( x.has(arr[i])){
            return arr[i]
        } else {
            x.add(arr[i]);
        }
        
    }
    return -1;
}

console.log(duplicateBySet(arr));