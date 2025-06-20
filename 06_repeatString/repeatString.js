const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let numOfTimes = "";
    for (let i = 0; i < num; i++) {
    numOfTimes = numOfTimes + string;
    }
    return numOfTimes;
};



// Do not edit below this line
module.exports = repeatString;
