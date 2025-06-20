const sumAll = function(num1, num2) {
    let nums = [];
    /* if (num1.typeOf() != number || num2.typeOf() != number) {
        return "ERROR";
    } */
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
