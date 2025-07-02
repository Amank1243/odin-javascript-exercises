const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr.length == 0) {
    return 0;
  }
  return arr.reduce((prev, num) => prev + num);
};

const multiply = function(arr) {
  return arr.reduce((prev, next) => prev * next);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
  if (a == 0) {
    return 1;
  }
  let nums = new Array;
	for (let i = 1; i <= parseInt(a); i++) {
    nums.push(i);
  }

  return nums.reduce((prev, next) => prev * next);
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
