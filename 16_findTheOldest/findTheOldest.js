const findTheOldest = function(array) {
   return array.sort(function(a, b) {
    const currentDate = new Date().getFullYear();

    const ageA = (a.yearOfDeath || currentDate) - a.yearOfBirth;
    const ageB = (b.yearOfDeath || currentDate) - b.yearOfBirth;

    return ageB - ageA;
   })[0];
}

// Do not edit below this line
module.exports = findTheOldest;
