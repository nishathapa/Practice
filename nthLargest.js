let arr = [1,2,3,4,5,6,3,4,7]
let nthLargest = function(arr){
    let highest = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > highest){
            highest = arr[i];
        }
    }
    return highest;
}
console.log(nthLargest(arr))

// let numbers = [1,2,3,2,2]
// console.log(Math.max(...numbers));