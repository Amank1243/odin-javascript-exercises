const sumAll = function(num1, num2) {
    let nums = [];
    if (Number.isInteger(num1) != true || Number.isInteger(num2) != true) {
        return "ERROR";
    } 
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    if (num1 < num2) {
    for (num1; num1 <= num2; num1++) {
        nums.push(num1);
    }
    } else {
        for (num2; num2 <= num1; num2++) {
        nums.push(num2);
    }
    }
    return nums.reduce((acc, item) => acc + item);
};

// Do not edit below this line
module.exports = sumAll;
