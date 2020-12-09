let reveerseArray = function(arr) {
    let len = arr.length;
    console.log(len);
   for( let i = len; i >= 0; i--){
   let x = [];
   if( len > 0){
       x.push(arr[i])
   }
   return x;
   }

}

console.log(reveerseArray([2,3,6,4]))