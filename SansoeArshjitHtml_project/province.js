const getDataButton = document.getElementById('fechDataButton');

getDataButton.addEventListener('click', () => {
    getDataButton.disabled = true;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
        console.log("The transfer is complete.");
        const response = JSON.parse(xhr.response);
        tableRef.innerText = ' ';
        const [, ...countries] = Object.entries(response);

        // populate table
        for (let i = 0; i < countries.length; i++) {
            let [name, properties] = countries[i];
            let [, , confirmedCasesTotal, , deathsTotal] = [...Object.values(properties)];
            tableRef.insertRow().innerHTML +=
                "<td>" + name + "</td>" +
                "<td>" + confirmedCasesTotal.toLocaleString() + "</td>" +
                "<td>" + deathsTotal.toLocaleString() + "</td>";
        }
        displayNumbers();
    });
    xhr.addEventListener("error", transferFailed);
    xhr.addEventListener("abort", transferCanceled);
    xhr.open("GET", `https://covid-api.mmediagroup.fr/v1/cases?country=${selectedCountry.value}`);
    xhr.send();
});