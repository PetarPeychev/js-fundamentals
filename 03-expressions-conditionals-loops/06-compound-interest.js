function getDeposit([sum, interest, months, years]) {
    let p = sum;
    let i = interest / 100;
    let n = 12 / months;

    console.log((p * Math.pow((1 + i / n), n * years)).toFixed(2));
}