// my variables
const buttonPopulation = document.querySelector(".population");
const buttonLanguage = document.querySelector(".languages");
const chatTitle = document.querySelector(".graph-title");
const subTitle = document.querySelector(".subtitle");
const countryMother = document.querySelector("#stat");
let totalPopulation = 0;
let finalResult;
let populationContainer;
let countryName;
let countryChart;
let chart;
let countryValue;
let populationOn = false;
let resultLang;
let languageOn = false;

// formatting of the subtitle element
subTitle.textContent = `Current, we have ${countries.length} countries`;

// this function gets the most populated country and return an []
let mostPopulatedCountries = (countries, number) => {
  finalResult = [];
  let sortOutcome = countries.sort(function (a, b) {
    totalPopulation += a.population + b.population;
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

// this function create, style and format the population elements
let populationDisplay = (world = "World", population = 7693165599) => {
  chatTitle.textContent = "10 Most populated countries in the world";
  populationContainer = document.createElement("div");
  populationContainer.setAttribute("class", "population-container");
  countryName = document.createElement("div");
  countryName.textContent = world;
  countryName.setAttribute("class", "country-name");
  populationContainer.appendChild(countryName);
  countryChart = document.createElement("div");
  countryChart.setAttribute("class", "country-chart");
  chart = document.createElement("div");
  chart.setAttribute("class", "chart");
  chart.style.width = `${(population / 7693165599) * 100}%`;
  countryChart.append(chart);
  populationContainer.append(countryChart);
  countryValue = document.createElement("div");
  countryValue.setAttribute("class", "country-value");
  countryValue.textContent = population.toLocaleString("en-US");
  populationContainer.append(countryValue);
  countryMother.appendChild(populationContainer);
};

// eventlistener trigger by the button population
buttonPopulation.addEventListener("click", () => {
  if (populationOn || languageOn) {
    countryMother.innerHTML = "";
    populationDisplay();
    mostPopulatedCountries(countries, 10);
    finalResult.forEach((item) => {
      populationDisplay(item.name, item.population);
    });
  } else {
    populationDisplay();
    mostPopulatedCountries(countries, 10);
    finalResult.forEach((item) => {
      populationDisplay(item.name, item.population);
    });
    populationOn = true;
  }
});

// this function gets the most spoken language and return an []
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
  resultLang = [];
  // running a loop base on the requested number by the user
  for (let i = 0; i < number; i++) {
    resultLang.push(langArrObj[i]);
  }
  return resultLang;
};

//  this function create, style and format the language elements
let languageDisplay = (language, value) => {
  chatTitle.textContent = "10 Most spoken languages in the world";
  languageContainer = document.createElement("div");
  languageContainer.setAttribute("class", "language-container");
  languageName = document.createElement("div");
  languageName.textContent = language;
  languageName.setAttribute("class", "language-name");
  languageContainer.appendChild(languageName);
  languageChart = document.createElement("div");
  languageChart.setAttribute("class", "language-chart");
  chart = document.createElement("div");
  chart.setAttribute("class", "chart");
  chart.style.width = `${(value / 91) * 100}%`;
  languageChart.append(chart);
  languageContainer.append(languageChart);
  languageValue = document.createElement("div");
  languageValue.setAttribute("class", "language-value");
  languageValue.textContent = value.toLocaleString("en-US");
  languageContainer.append(languageValue);
  countryMother.appendChild(languageContainer);
};

// eventlistener trigger by the button language
buttonLanguage.addEventListener("click", () => {
  if (languageOn || populationOn) {
    countryMother.innerHTML = "";
    mostSpokenLanguages(countries, 10);
    resultLang.forEach((item) => {
      languageDisplay(item.country, item.count);
    });
  } else {
    mostSpokenLanguages(countries, 10);
    resultLang.forEach((item) => {
      languageDisplay(item.country, item.count);
    });
    languageOn = true;
  }
});
