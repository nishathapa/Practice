const { stringify } = require("querystring")

const moveCharForward = (str) =>
    str.split('').map(char=>String.fromCharCode(char.charCodeAt(0) + 1)).join('');
console.log(moveCharForward("abcde"));