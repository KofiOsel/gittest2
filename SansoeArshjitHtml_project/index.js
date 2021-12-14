google.charts.load('current', {
    'packages':['geochart'],
});
const xhr = new XMLHttpRequest();
xhr.addEventListener("load", () => {
    console.log('The transfer is complete.');
    const response = JSON.parse(xhr.response);
    const [...names] = Object.keys(response);
    let confirmedCasesArray = []
    for (let i = 0; i < names.length; i++) {
        const [confirmedCasesTotal] = Object.values(response[`${names[i]}`]["All"]);
        confirmedCasesArray[i] = confirmedCasesTotal;
    }
    const dataArray = [];
    dataArray[0] = ['Country', 'Confirmed Cases'];
    for (let i = 0; i < names.length - 1; i++) {
        dataArray[i + 1] = [names[i], confirmedCasesArray[i]];
    }
    console.log(dataArray);
    google.charts.setOnLoadCallback(drawRegionsMap(dataArray));

});
xhr.addEventListener('error', transferFailed);
xhr.addEventListener('abort', transferCanceled);
xhr.open('GET', 'https://covid-api.mmediagroup.fr/v1/cases');
xhr.send();




function drawRegionsMap(dataArray) {
    const data = google.visualization.arrayToDataTable(dataArray);

    const options = {
        colors: ['red']
    };

    const chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}

