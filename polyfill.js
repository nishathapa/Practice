let name = {
    firstName: "nisha",
    lastName: "thapa"
}

let printname = function() {
    console.log(this. firstName + " " + this.lastName);
}

let printMyName = printname.bind(name);
printMyName();