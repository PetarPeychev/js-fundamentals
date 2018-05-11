function circleArea(radius) {
    let area = Math.PI * radius * radius;
    console.log(area);
    roundedArea = Math.round(area * 100) / 100;
    console.log(roundedArea);
}