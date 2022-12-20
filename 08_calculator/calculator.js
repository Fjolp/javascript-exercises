const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1 , num2) {
	return num1 - num2
};

const sum = function(numbers) {
	return numbers.reduce((partialSum, a) => partialSum + a, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((a, b) => a * b);
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
	if(num <= 1){
    return 1;
  }else{
    return num * factorial(num -1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
