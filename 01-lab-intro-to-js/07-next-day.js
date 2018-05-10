function nextDay(year, month, day) {
    month--; // fix month since JS counts 0-11
    day++;
    let d = new Date(year, month, day);

    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}