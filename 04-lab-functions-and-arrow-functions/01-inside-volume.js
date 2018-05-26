function areInside(points) {
  splitPoints(points).forEach(function(point) {
    if (isInside(point)) console.log('inside');
    else console.log('outside');
  })

  function isInside({x, y, z}) {
    if (x >= 10 && x <= 50) {
      if (y >= 20 && y <= 80) {
        if (z >= 15 && z <= 50) {
          return true;
        }
      }
    }
    return false;
  }

  function splitPoints(points, acc = []) {
    if (points.length === 0) return acc;
    const [x, y, z, ...rest] = points;
    acc.push({x, y, z});
    return splitPoints(rest, acc);
  }
}