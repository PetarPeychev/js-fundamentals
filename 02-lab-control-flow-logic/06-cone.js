function coneVolAndArea(radius, height) {
    let volume = Math.PI * radius * radius * height / 3;
    let slantHeight = Math.sqrt(radius * radius + height * height);
    let lateralArea = Math.PI * radius * slantHeight;
    let baseArea = Math.PI * radius * radius;
    let totalArea = lateralArea + baseArea;

    console.log(volume);
    console.log(totalArea);
}