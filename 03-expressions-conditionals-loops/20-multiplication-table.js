function printTable(n) {
  console.log('<table border="1">');
  console.log(createMatrix(n).map(toHtml).join('\n'));
  console.log('</table>')

  function createList(n, firstChar, increment, list = [], iter = 0) {
    if (iter > n) return list;
    if (iter === 0) {
      const newList = [firstChar, increment];
      return createList(n, firstChar, increment, newList, iter + 2);
    }
    const newList = list.concat([increment * iter]);
    return createList(n, firstChar, increment, newList, iter + 1);
  }

  function toHtml(list) {
    const reducer = (acc, val) => acc + '<td>' + val + '</td>';
    const hReducer = (acc, val) => acc + '<th>' + val + '</th>';
    if (list[0] === 'x') return list.reduce(hReducer, '<tr>') + '</tr>';
    else {
      return '<tr><th>' + list[0] + '</th>' + 
      list.slice(1).reduce(reducer, '') + '</tr>';
    }
  }

  function createMatrix(n, iter = 0, matrix = []) {
    if (iter > n) return matrix;
    if (iter === 0) {
      const list = createList(n, 'x', 1);
      matrix[iter] = list;
      return createMatrix(n, iter + 1, matrix);
    }
    const list = createList(n, iter, iter);
    matrix[iter] = list;
    return createMatrix(n, iter + 1, matrix);
  }
}