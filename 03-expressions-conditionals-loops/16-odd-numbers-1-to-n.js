function oddNumbersRecursive(n, m = 1) {
    const mIsOdd = m % 2 === 1;
    if (m > n) {
        return;
    }
    else if (n >= m && mIsOdd) {
        console.log(m);
    }
    oddNumbersRecursive(n, m + 1);
}