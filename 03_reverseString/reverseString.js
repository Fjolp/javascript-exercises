const reverseString = function(str) {
    let reversed = "";
    for (let i = str.length -1; i >= 0; --i){
        reversed += str[i];
    }
    return reversed;
};

reverseString("hello");
reverseString("hello there");
reverseString("123! abc!");
reverseString("");
// Do not edit below this line
module.exports = reverseString;
