let prime =function(n){
    if (n == 0 || n == 1){
        console.log("Not a prime");
    } else if ( n % 1 == 0 && n % n == 0){
        console.log("Prime");
    }else {
        console.log("Not a prime")
    }
}

prime(36);