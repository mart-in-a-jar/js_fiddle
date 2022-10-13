function populateCountries(ele) {
    const countryData = window.intlTelInputGlobals.getCountryData();

    countryData.forEach((country) => {
        const optionNode = document.createElement("option");
        optionNode.value = country.iso2;
        optionNode.textContent = country.name;
        ele.appendChild(optionNode);
    });
}

export { populateCountries };
