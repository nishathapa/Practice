let word = "asd"
let frontBack = function(word) {
    let first = word.substring(0,1);
    word = first + word + first;

    return word
}
console.log(frontBack(word));

