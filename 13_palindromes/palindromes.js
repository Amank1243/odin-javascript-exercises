const palindromes = function (word) {
    let string = new String(word)
    string = string.toLowerCase();
    string = string.replace(/[^a-z1-9]/g, '');
    
    let arr = string.split('');
    if (arr.join('') == arr.reverse().join('')) {
        return true;
    } else {
    return false;
    }
}
// Do not edit below this line
module.exports = palindromes;
