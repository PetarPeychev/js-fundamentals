function calculateSumAndVat(inputArray) {
    let sum = 0;

    for (let price of inputArray) {
        sum += price;
    }
    console.log(`sum = ${sum}`);

    let vat = sum * 0.2;
    console.log(`VAT = ${vat}`);

    let total = sum + vat;
    console.log(`total = ${total}`);
}