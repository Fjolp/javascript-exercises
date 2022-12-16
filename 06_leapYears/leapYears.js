const leapYears = function(year) {
    if ((year % 4) === 0 && (year % 400 === 0 || year % 100 !== 0)) {
        let isLeap = true;
        return isLeap
    }else{
        isLeap = false;
        return isLeap;
    }
    
};

// Do not edit below this line
module.exports = leapYears;
