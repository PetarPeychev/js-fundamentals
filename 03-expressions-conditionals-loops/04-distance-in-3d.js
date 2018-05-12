function distanceIn3D(inputs) {
    let xOffset = inputs[0] - inputs[3];
    let yOffset = inputs[1] - inputs[4];
    let zOffset = inputs[2] - inputs[5];

    let distance = Math.sqrt(xOffset ** 2 + yOffset ** 2 + zOffset ** 2);

    console.log(distance);
}