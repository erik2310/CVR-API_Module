let cvrAPIModule = require('./cvr-api-module');

// Kalder på cvrAPIModules hentCVRAPIJSON funktion til at hente et JSON objekt, når den søger efter Erhvervsakademi Sjælland
cvrAPIModule.hentCVRAPIJSON('Erhvervsakademi Sjælland', (objectFromAPI) => {
    console.log('EASJs industrikode: ' + objectFromAPI.productionunits[8].industrycode);
    console.log('Navn: ' + objectFromAPI.productionunits[8].name);
    console.log('Adresse: ' + objectFromAPI.productionunits[8].address);
    console.log('Postnummer: ' + objectFromAPI.productionunits[8].zipcode);
    console.log('By: ' + objectFromAPI.productionunits[8].city);
});

