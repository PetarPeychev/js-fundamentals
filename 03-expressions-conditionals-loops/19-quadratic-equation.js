function solveQuadratic(a, b, c) {
    const result1 = 
    (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    const result2 = 
    (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);

    if (isNaN(result1) || isNaN(result2)) {
        console.log('no');
    }
    else if (result1 === result2) {
        console.log(result1);
    }
    else {
        console.log(Math.min(result1, result2));
        console.log(Math.max(result1, result2));
    }
}