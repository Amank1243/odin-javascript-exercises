function fibonacci (n) {
    let answer;
    let a = 1;
    let b = 0;

    let a_sum;
    let b_sum;
    // 0, 1, 1, 2, 3, 5, 8
    if (n < 0) {
        return "OOPS";
    }
    if (n == 0) {
        return 0;
    } else if (n == 1 || n == 2) {
        return 1;
    } else if (n > 2) {
        for (let i = 1; i <= n; i++) {
            next = a + b;
            a = b;
            b = next;
        }
        return b;
    }

}

// Do not edit below this line
module.exports = fibonacci;
