function lastMonth([day, month, year]) {
    console.log(new Date(year, month - 1, 0).getDate());
}