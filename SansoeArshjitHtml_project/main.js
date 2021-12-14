const fetchDataButton = document.querySelector('.fetchData');
const selectedCountry = document.getElementById("country");
const confirmedCases = document.querySelector('#cases');
const deaths = document.querySelector('#deaths');
const lastRefreshed = document.querySelector('#lastRefreshed');
const dataDiv = document.querySelector('.displayData');
const tableRef = document.getElementById('table');

let seconds = 0;

const displayNumbers = () => {

    lastRefreshed.textContent = `${seconds}s`;
    if (seconds === 0) {
        setInterval(()=> {
            seconds++;
            lastRefreshed.textContent = `${seconds}s`;
        }, 1000);
    } else {
        seconds = 0;
        lastRefreshed.textContent = `${seconds}s`;
    }

    getDataButton.disabled = false;
    if (dataDiv.style.display === "none")
        dataDiv.style.display = "block";
};

const transferFailed = () => console.log('An error occurred while transferring the file.');
const transferCanceled = () => console.log('The transfer has been canceled by the user.');