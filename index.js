const API = 'http://hp-api.herokuapp.com/api/characters';
const severusData = [];
const students = [];

const generateStudentsBtn = document.querySelector('.start-class-btn');

const severus = document.getElementById('severus-card');
const severusImgContainer = document.createElement('div');
const severusIgm = document.createElement('img');
const severusName = document.createElement('p');
const severusAge = document.createElement('p');
severus.append(severusImgContainer, severusName, severusAge);
severusImgContainer.append(severusIgm);

function clearItems(el) {
    el.innerHTML = '';
}

function deleteStudent(el, i) {
    el[i];
}

function generateRandomStudents(arr) {
    const pupilsContainer = document.querySelector('.pupils-container');

    clearItems(pupilsContainer);

    for (let i = 0; i <= 9; i++) {
        let randomNumber = Math.round(Math.random() * 101);

        if (arr.indexOf(randomNumber) === -1) {
            pupilsContainer.innerHTML += `
                <div class='student-container'>
                    <img class='student-img' src=${!arr[randomNumber].image ? "./assets/avatar.png" : arr[randomNumber].image} />
                    <p>Navn: ${arr[randomNumber].name}</p>
                    <p>Hus: ${arr[randomNumber].house ? arr[randomNumber].house : 'Intet hus'}</p>
                    <button class='delete-student-btn'>Slett Elev</button>
                </div>
            `;

            document.querySelectorAll('.student-container').forEach(background => {
                const x = Math.floor(Math.random() * 100 + 80);
                const y = Math.floor(Math.random() * 100 + 80);
                const z = Math.floor(Math.random() * 100 + 80);
                const bgColor = "rgb(" + x + "," + y + "," + z + ")";
                background.style.background = bgColor;
            });

            document.querySelectorAll('.delete-student-btn').forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    const students = document.querySelectorAll('.student-container');

                    randomNumber = Math.round(Math.random() * 101);

                    function test() {
                        console.log(i);
                    }

                    students[i].innerHTML = `
                        <img class='student-img' src=${!arr[randomNumber].image ? "./assets/avatar.png" : arr[randomNumber].image} />
                        <p>Navn: ${arr[randomNumber].name}</p>
                        <p>Hus: ${arr[randomNumber].house ? arr[randomNumber].house : 'Intet hus'}</p>
                        <button onclick=${test()} class='delete-student-btn'>Slett Elev</button>
                    `;
                });
            });
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

        severusIgm.src = severusData[0].image;
        severusName.textContent = 'Navn: ' + severusData[0].name;
        severusAge.textContent = `Alder: ${2022 - severusData[0].yearOfBirth
            } år`;


        generateStudentsBtn.addEventListener('click', () => {
            generateRandomStudents(students);
        });
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

