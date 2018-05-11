function isPrime(num) {
    if (num === 1 || num === 0 || num < 0) {
        return false;
    }
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}