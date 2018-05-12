function pointInRectangle([x, y, xMin, xMax, yMin, yMax]) {
     let isInRectangle = false;
     if (x <= xMax && x >= xMin && y <= yMax && y >= yMin) {
         isInRectangle = true;
     }
     if (isInRectangle) {
         console.log("inside");
        }
     else {
         console.log("outside");
     }
}