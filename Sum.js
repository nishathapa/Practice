let arr = [3,2,4]
let sum = function(arr) {
    let len = arr.length;
    let result = 0;
    for( let i = 0; i < len; i++){
        result = result + arr[i];
    }
    return result;
}
console.log(sum(arr))

// let sum = function(n) {
//     let result = 0;
//     for ( let i = 0; i <= n; i++){
//         result = result + i;
//     }
//     return result;
// }
// console.log(sum(4))