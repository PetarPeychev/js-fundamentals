function oddOrEven(input) {
    let remainder = Math.abs(input % 2);
    if (remainder === 0) {
        console.log("even");
    }
    else if (remainder === 1) {
        console.log("odd");
    }
    else {
        console.log("invalid");
    }
}