function round([number, decimalPlaces]) {
    let n = number;
    let d = decimalPlaces;
    if (d > 15) d = 15;

    let multiplier = 10 ** d;
    let nRounded = Math.round(n * multiplier) / multiplier;
    console.log(nRounded);
}