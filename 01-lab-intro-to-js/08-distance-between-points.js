function distanceBetweenPoints(x1, y1, x2, y2) {
    let firstPoint = {x: x1, y: y1};
    let secondPoint = {x: x2, y: y2};

    let distance = Math.sqrt((firstPoint.x - secondPoint.x) ** 2 + (firstPoint.y - secondPoint.y) ** 2); 
    
    return distance;
}