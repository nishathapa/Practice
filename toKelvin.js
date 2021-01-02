// function celsiusToKelvin(celsius) {
//     let kelvin = celsius + 273.15;
//     console.log("Celsius: " + celsius);
//     console.log("Kelvin: " + kelvin);
// }

// celsiusToKelvin(56)

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout

});


rl.question("Enter the degree in celsius: ", function toKelvin(celsius){
    console.log(`Celsius: ${celsius}`);
    let Kelvin = (Number(celsius) + 273.5);
    console.log(Kelvin);
    rl.close();
});

