function gradsToDegrees(grads) {
    let degrees = grads * 0.9;
    let degreesNormalized = degrees - (360 * Math.floor(degrees/360));

    console.log(degreesNormalized);
}