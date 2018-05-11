function colorfulNumbers(n) {
    let html = "<ul>";
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            html += `<li><span style='color:blue'>${i}</span></li>`;
        }
        else {
            html += `<li><span style='color:green'>${i}</span></li>`;
        }
    }
    html += "</ul>";
    return html;
}