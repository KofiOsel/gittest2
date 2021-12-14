fetchDataButton.addEventListener('click', () => {
    fetchDataButton.disabled = true;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
        console.log('The transfer is complete.');
        const response = JSON.parse(xhr.response);
        const [, confirmedCasesTotal, , deathsTotal] = Object.values(response['All']);
        confirmedCases.textContent = confirmedCasesTotal.toLocaleString();
        deaths.textContent = deathsTotal.toLocaleString();
        displayNumbers(confirmedCasesTotal, deathsTotal);
        createChart(confirmedCasesTotal, deathsTotal);
    });
    xhr.addEventListener('error', transferFailed);
    xhr.addEventListener('abort', transferCanceled);
    xhr.open('GET', 'https://covid-api.mmediagroup.fr/v1/cases?country=Global');
    xhr.send();
});