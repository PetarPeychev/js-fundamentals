function distanceOverTime(inputs) {
    let firstSpeed = inputs[0] * 1000 / 3600;
    let secondSpeed = inputs[1] * 1000 / 3600;
    let time = inputs[2];

    let firstDistance = firstSpeed * time;
    let  secondDistance = secondSpeed * time;

    let deltaDistance = Math.abs(firstDistance - secondDistance);

    console.log(deltaDistance);
}