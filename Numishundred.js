// const rl = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter the numbers: ",function numIsHundred(a, b){
//     console.log(`a: ${a}, b: ${b}`);
//     if (a === 100 || b === 100 || a + b === 100){
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }

//     rl.close();
// });

let func = (a, b) => a ===100 || b === 100 || a+b ===100

console.log(func(93, 1));