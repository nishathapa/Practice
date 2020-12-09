// let name = {
//     firstName: "Nisha",
//     lastName: "Thapa",
//     printFullName: function() {
//         console.log(this.firstName + " " + this.lastName);
//     }
// }

// name.printFullName();

// let name2 = {
//     firstName: "alpha",
//     lastName: "Charlie",

// }

// name.printFullName.call(name2);

let name = {
    firstName: "Nisha",
    lastName: "Thapa"
}

let name2 = {
    firstName: "java",
    lastName: "Script"
}

let printFullName = function() {
    console.log(this.firstName + " " + this.lastName)
}

printFullName.call(name);
printFullName.call(name2);
printFullName(name);
