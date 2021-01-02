function RevArr() {
    var arr = [0, 3, 5];
    console.log(arr);
    console.log(arr.map(arr.pop,[...arr]));
}

RevArr();