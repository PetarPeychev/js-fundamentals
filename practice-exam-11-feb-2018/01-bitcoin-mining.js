function bitcoinMining(shifts) {
  let bitcoins = 0;
  let firstDay = undefined;
  let money = 0;
  const goldPrice = 67.51;
  const bitcoinPrice = 11949.16;
  shifts = shifts.map(parseFloat);

  for (let i = 0; i < shifts.length; i++) {
    const shift = shifts[i];
    let exchangedMoney = 0;
    if ((i + 1) % 3 === 0) {
      exchangedMoney = shift * goldPrice * 0.7;
    }
    else {
      exchangedMoney = shift * goldPrice;
    }
    money += exchangedMoney;

    if (money >= bitcoinPrice) {
      if (firstDay == undefined) firstDay = i + 1;
      let boughtBitcoins = Math.trunc(money / bitcoinPrice);
      bitcoins += boughtBitcoins;
      money -= boughtBitcoins * bitcoinPrice;
    }
  }

  console.log('Bought bitcoins: ' + bitcoins);
  if (firstDay != undefined) {
    console.log('Day of the first purchased bitcoin: ' + firstDay);
  }
  console.log('Left money: ' + money.toFixed(2) + ' lv.');
}