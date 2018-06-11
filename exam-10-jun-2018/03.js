'use strict';
function func(input) {
  const regexCountry = /[A-Z][a-z]*[A-Z]/gm;
  const regexNumbers = /([0-9]{3}(\.([0-9]+))?)/gm;
  const startIndex = parseFloat(input[0]);
  const endIndex = parseFloat(input[1]);
  const replaceWord = input[2];
  const encryptedText = input[3];

  let country = regexCountry.exec(encryptedText)[0];
  let countryWrongWord = country.substring(startIndex, endIndex + 1);
  country = country.replace(countryWrongWord, replaceWord).toLowerCase();
  country = country.charAt(0).toUpperCase() + country.slice(1);

  let decryptedWord = encryptedText.match(regexNumbers).map(x => {
   return Math.ceil(x);
  }).map(x => {
    return String.fromCharCode(x);
  }).join('');
  decryptedWord = decryptedWord.charAt(0).toUpperCase() 
  + decryptedWord.slice(1);
  console.log(country + ' => ' + decryptedWord);
}

func(["1", "4", "loveni", ""])