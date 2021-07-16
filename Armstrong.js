let armstrong = function(x){
   const toArray = x.toString().split('').map(Number);
   const len = toArray.length;
   const newNum = toArray.map(a => {return a ** len});

   if(newNum == x ){
       console.log("Armstrong")
   } else {
       console.log("Not an armstrong");
   }
}
armstrong(7899);


