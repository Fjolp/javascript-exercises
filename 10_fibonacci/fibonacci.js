const fibonacci = function(num) {

    var trueNum = parseInt(num);

    if(trueNum < 0){
        return "OOPS"
    }else{
        let n1 = 0;
        let n2 = 1;
        let tempNum

        for(var i = 1; i <= trueNum; i ++){
            tempNum = n1 + n2;
            n1 = n2;
            n2 = tempNum;
            }
        return n1;
    }
};

// Do not edit below this line
module.exports = fibonacci;
