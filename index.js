let mostSpokenLanguages = (countries, number) => {
  // getting the whole languages from the countries object saving them inside language array
  const language = [];
  for (let i = 0; i < countries.length; i++) {
    for (let j = 0; j < countries[i].languages.length; j++) {
      language.push(countries[i].languages[j]);
    }
  }
  // getting the each language count and saving it inside objLanguage object
  const objLanguage = {};
  language.forEach((element) => {
    if (!objLanguage[element]) {
      objLanguage[element] = 1;
    } else {
      objLanguage[element] += 1;
    }
  });
  // serving each language agaist it count and storing it inside langArrObj array
  const langArrObj = [];
  for (const i in objLanguage) {
    let objIndividual = {};
    objIndividual.country = i;
    objIndividual.count = objLanguage[i];
    langArrObj.push(objIndividual);
  }
  // sorting the langArrObj array using the count key
  langArrObj.sort(function (a, b) {
    if (a.count > b.count) return -1;
    if (a.count < b.count) return 1;
    return 0;
  });
  const result = [];
  // running a loop base on the requested number by the user
  for (let i = 0; i < number; i++) {
    result.push(langArrObj[i]);
  }
  return result;
};

console.log(mostSpokenLanguages(countries, 10));

let totalPopulation = 0
let mostPopulatedCountries = (countries, number) => {
  let finalResult = [];
  let sortOutcome = countries.sort(function (a, b) {
    totalPopulation += (a.population + b.population)
    if (a.population > b.population) return -1;
    if (a.population < b.population) return 1;
    return 0;
    
  });
  for (let i = 0; i < number; i++) {
    let currentCountry = {};
    currentCountry.name = sortOutcome[i].name;
    currentCountry.population = sortOutcome[i].population;
    finalResult.push(currentCountry);
  }
  return finalResult;
};

console.log(mostPopulatedCountries(countries, 15))
console.log(totalPopulation)

// countries.forEach(({population})=>{
//     totalPopulation += population
// })
// console.log(totalPopulation)
// 7349137231