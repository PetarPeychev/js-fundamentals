'use strict';
function func(trips) {
  let countries = {};
  for (let trip of trips) {
    trip = trip.split(' > ');
    let country = trip[0];
    let town = trip[1].charAt(0).toUpperCase() + trip[1].slice(1);
    let cost = parseFloat(trip[2]);

    if (countries.hasOwnProperty(country)) {
      if (countries[country].hasOwnProperty(town)) {
        if (countries[country][town] > cost) {
          countries[country][town] = cost;
        }
      }
      else {
        countries[country][town] = cost;
      }
    }
    else {
      countries[country] = { [town]: cost };
    }
  }

  let orderedCountries = {};
  Object.keys(countries).sort().forEach(key => {
    orderedCountries[key] = countries[key];
  })

  for (const c of Object.values(orderedCountries)) {
    let orderedCountry = {};
    Object.keys(c).sort(function (a, b) { return c[a] - c[b] })
      .forEach(key => {
        orderedCountry[key] = c[key];
      });
  }

  Object.keys(orderedCountries).forEach(country => {
    let string = country + ' ->';
    Object.keys(orderedCountries[country]).forEach(town => {
      string += ' ' + town + ' -> ' + orderedCountries[country][town];
    });
    console.log(string);
  });
}

func(["Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200"]);
