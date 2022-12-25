const palindromes = function (str) {

    let finalStr2 = str.toLowerCase().replace(/[^a-z]/g, "");
    let str2 = str.toLowerCase().replace(/[^a-z]/g, "");
    let myArray = str2.split("");
    let reversed = myArray.reverse();
    let reversedStr = reversed.join("");
    
    
    if (reversedStr === finalStr2){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
