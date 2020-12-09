let arr = [2,3,4,5]
let doubleElement = function(arr) {
    let length = arr.length;
    for ( let i = 0; i < length; i++){
        arr[i] = arr[i]*2;
    }
    return arr;
}
console.log(doubleElement(arr))