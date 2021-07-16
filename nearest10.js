
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the number: ", function nearest(num){
    console.log(`Number: ${(num)}`);
    // let updated = (parseInt(num/10)+ 1)* 10;
    // console.log(updated);

    let q = (parseInt(num/10));
    console.log(q);
    let r = num%10;
    console.log(r)

    if (r >= 5){
        q = q+1;
    }
    console.log(q*10);
    rl.close();
});

// rl.question("Enter the degree in celsius: ", function toKelvin(celsius){
//     console.log(`Celsius: ${celsius}`);
//     let Kelvin = (Number(celsius) + 273.5);
//     console.log(Kelvin);
//     rl.close();
// })