'use strict';
function func (tasks) {
  let totalMoney = 0;
  let clumsyCustomer = 1;
  let specialisedCustomer = 1;
  for (const task of tasks) {
    const profession = task.split(' : ')[0];
    let money = parseFloat(task.split(' : ')[1]);
    
    switch (profession) {
      case 'Programming':
      case 'Hardware maintenance':
      case 'Cooking':
      case 'Translating':
      case 'Designing':
        if (money < 200) {
          break;
        }
        money -= money / 5;
        if (specialisedCustomer % 2 === 0) {
          money += 200;
        }
        totalMoney += money;
        specialisedCustomer++;
        break;
      case 'Driving':
      case 'Managing':
      case 'Fishing':
      case 'Gardening':
        totalMoney += money;
        break;
      case 'Singing':
      case 'Accounting':
      case 'Teaching':
      case 'Exam-Making':
      case 'Acting':
      case 'Writing':
      case 'Lecturing':
      case 'Modeling':
      case 'Nursing':
        if (clumsyCustomer % 2 === 0) {
          totalMoney += money - (money / 20);
        }
        else if (clumsyCustomer % 3 === 0) {
          totalMoney += money - (money / 10);
        }
        else {
          totalMoney += money;
        }
        clumsyCustomer++;
        break;
    }
  }

  console.log('Final sum: ' + totalMoney.toFixed(2));
  if (totalMoney > 1000) {
    console.log(
      'Mariyka earned ' + (totalMoney - 1000).toFixed(2) + ' gold more.'
    );
  }
  else {
    console.log(
      'Mariyka need to earn ' + (1000 - totalMoney).toFixed(2) + 
      ' gold more to continue in the next task.'
    );
  }
}

func(['Programming : 500', 'Driving : 243', 'Singing : 100', 'Cooking : 199']); // works