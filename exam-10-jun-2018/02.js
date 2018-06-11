'use strict';
function func(input) {
  const delimiter = input[1];
  const companies = input[0].split(delimiter);
  const texts = input.splice(2).map(x => {
    return x.toLowerCase();
  });
  let validTexts = [];
  let invalidTexts = [];
  for (const text of texts) {
    let isValid = true;
    companies.map(company => {
      if (text.includes(company) === false) isValid = false;
    });

    if (isValid) validTexts.push(text);
    else invalidTexts.push(text);
  }
  if(validTexts.length > 0) {
    console.log('ValidSentences');
    for (let i = 0; i < validTexts.length; i++) {
      console.log((i + 1) + '. ' + validTexts[i]);
    }
  }
  if (invalidTexts.length > 0) {
    if (validTexts.length > 0) console.log('='.repeat(30));
    console.log('InvalidSentences');
    for (let i = 0; i < invalidTexts.length; i++) {
      console.log((i + 1) + '. ' + invalidTexts[i]);
    }
  }
}

func(["bulgariatour@, minkatrans@, koftipochivkaltd",
"@,",
"Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
"dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
"someone continues as no "]) // works