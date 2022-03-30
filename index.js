const API = 'http://hp-api.herokuapp.com/api/characters';
const severusData = [];

const severus = document.getElementById('severus-card');
const severusIgm = document.createElement('img');
const severusName = document.createElement('p');
const severusAge = document.createElement('p');
severus.append(severusIgm, severusName, severusAge);

async function fetchData() {
    try {
        const response = await fetch(API);
        const data = await response.json();
        severusData.push(data[7]);
        console.log(severusData);

        severusIgm.src = severusData[0].image;
        severusName.textContent = 'Navn: ' + severusData[0].name;
        severusAge.textContent = `Alder: ${2022 - severusData[0].yearOfBirth
            } år`;
    }
    catch (err) {
        console.log(err);
    }
}

fetchData();

function showBubble() {
    const test = document.getElementById('test');
    test.classList.remove('test-hidden');
}

function hideBubble() {
    const test = document.getElementById('test');
    test.classList.add('test-hidden');
}

severusIgm.addEventListener('mouseover', showBubble);
severusIgm.addEventListener('mouseleave', hideBubble);