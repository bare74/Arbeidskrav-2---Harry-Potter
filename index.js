const API = 'http://hp-api.herokuapp.com/api/characters';
const severusData = [];
const students = [];

const severus = document.getElementById('severus-card');
const severusImgContainer = document.createElement('div');
const severusIgm = document.createElement('img');
const severusName = document.createElement('p');
const severusAge = document.createElement('p');
severus.append(severusImgContainer, severusName, severusAge);
severusImgContainer.append(severusIgm);

function generateRandomStudents(arr) {
    const pupilsContainer = document.querySelector('.pupils-container');

    for (let i = 0; i <= 9; i++) {
        const randomNumber = Math.round(Math.random() * 101);
        if (arr.indexOf(randomNumber) === -1) {
            console.log(arr[randomNumber]);
            pupilsContainer.innerHTML += `
                <div class='student-container'>
                    <img class='student-img' src=${arr[randomNumber].image ? arr[randomNumber].image : "./assets/avatar.png"} />
                    <p>${arr[randomNumber].name}</p>
                    <p>${arr[randomNumber].house}</p>
                </div>
            `;
        }
    }
}

async function fetchData() {
    try {
        const response = await fetch(API);
        const data = await response.json();
        severusData.push(data[7]);

        data.filter((student) => {
            if (student.hogwartsStudent === true) {
                students.push(student);
            }
        });

        console.log(severusData);

        severusIgm.src = severusData[0].image;
        severusName.textContent = 'Navn: ' + severusData[0].name;
        severusAge.textContent = `Alder: ${2022 - severusData[0].yearOfBirth
            } år`;

        generateRandomStudents(students);
    }
    catch (err) {
        console.log(err);
    }
}

fetchData();

function showBubble() {
    const talkingBubble = document.getElementById('talking-bubble-container');
    talkingBubble.classList.remove('bubble-container-hidden');
}

function hideBubble() {
    const talkingBubble = document.getElementById('talking-bubble-container');
    talkingBubble.classList.add('bubble-container-hidden');
}

severusImgContainer.addEventListener('mouseenter', showBubble);
severus.addEventListener('mouseleave', hideBubble);