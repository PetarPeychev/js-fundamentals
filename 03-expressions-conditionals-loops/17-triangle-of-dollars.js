function dollarTriangle(n, m = 1) {
    if (m > n) {
        return;
    }
    else {
        console.log('$'.repeat(m));
        dollarTriangle(n, m + 1);
    }
}