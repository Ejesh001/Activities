// Get all the countries from Asia continent /region using Filter function
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
    
        const asiaCountries = data.filter(country => country.region === 'Asia');

       
        console.log("Countries in Asia:");
        asiaCountries.forEach(country => console.log(country.name.common));
    })

    // Get all the countries with a population of less than 2 lakhs using Filter function

    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        const countriesWithLowPopulation = data.filter(country => country.population < 200000);
        console.log("Countries with population less than 2 lakhs:");
        countriesWithLowPopulation.forEach(country => console.log(country.name.common));
    })
    // Print the total population of countries using reduce function
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
        console.log("Total population of countries:", totalPopulation);
    })
    // Print the country that uses US dollars as currency.
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        const countryWithUSD = data.find(country => country.currencies && country.currencies.USD);
        if (countryWithUSD) {
            console.log("Country that uses US dollars as currency:", countryWithUSD.name.common);
        } else {
            console.log("No country found that uses US dollars as currency.");
        }
    })
    // Print the following details name, capital, flag, using forEach function
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            if (country.name.common) {
                console.log("Name:", country.name.common);
            }
            if (country.capital && country.capital[0]) {
                console.log("Capital:", country.capital[0]);
            }
            if (country.flags && country.flags.svg) {
                console.log("Flag:", country.flags.svg);
            }
           
        });
    });