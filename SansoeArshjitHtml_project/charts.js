const doughnut = document.getElementById('myChart').getContext('2d');
let ch = null;
function createChart(confirmedCases, deaths) {
    if (ch !== null)
        ch.destroy();

    ch = new Chart(doughnut, {
        type: 'doughnut',
        data: {
            labels: ['Confirmed Cases', 'Deaths'],
            datasets: [{
                data: [confirmedCases, deaths],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
                hoverOffset: 10,
            }]
        },
        options: {
            responsive: false
        }
    });
}
