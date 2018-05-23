function printFigure(n) {
  console.log(constructFigure(n));

  function constructBorder(n) {
    const border = '+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+\n';
    return border;
  }

  function constructRow(n) {
    const row = '|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|\n';
    return row;
  }

  function constructFigure(n, figure = '', iter = 0) {
    const figureSize = n % 2 == 0 ? n - 1 : n;
    if (iter > figureSize - 1) return figure;
    if (iter === 0 || 
        iter === figureSize - 1 || 
        iter === Math.trunc(figureSize / 2)) {
          return constructFigure(n, figure + constructBorder(n), iter + 1);
    }
    return constructFigure(n, figure + constructRow(n), iter + 1);
  }
}