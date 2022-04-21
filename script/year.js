let studentArray = [];
let slytherinArray = []; 
let gryffindorArray = [];
let ravenclawArray = [];
let hufflepuffArray = [];
let studentContainer = document.getElementById("show-content");
const searchBar = document.getElementById('searchBar');



//---------------------------------------------------//
async function fetchStudents() {
    let response = await fetch("http://hp-api.herokuapp.com/api/characters/students"); // or API as defined
    let data = await response.json();
    studentArray.push(data);

    data.filter((student) => {
        if (student.house == "Slytherin") {
            slytherinArray.push(student);
        }
        if (student.house == "Gryffindor") {
            gryffindorArray.push(student);
        }
        if (student.house == "Ravenclaw") {
            ravenclawArray.push(student);
        }
        if (student.house == "Hufflepuff") {
            hufflepuffArray.push(student);
        }

    });
}


let houseOfSlytherin = document.getElementById("slytherinImg");
houseOfSlytherin.addEventListener("click", function () {filterStudents("Slytherin");
});

let houseOfGryffindor = document.getElementById("gryffindorImg");
houseOfGryffindor.addEventListener("click", function () {filterStudents("Gryffindor");
});

let houseOfRavenclaw = document.getElementById("ravenclawImg");
houseOfRavenclaw.addEventListener("click", function () {filterStudents("Ravenclaw");
});


let houseOfHufflepuff = document.getElementById("hufflepuffImg");
houseOfHufflepuff.addEventListener("click", function () {filterStudents("Hufflepuff");
})

function filterStudents(house) {
    if (house == "Slytherin") {
        let hogwartsHouse = slytherinArray;
        showStudents(hogwartsHouse)};

    if(house == "Gryffindor") {
        let hogwartsHouse = gryffindorArray;
        showStudents(hogwartsHouse)};

    if (house == "Ravenclaw") {
        let hogwartsHouse = ravenclawArray;
        showStudents(hogwartsHouse)};

    if (house == "Hufflepuff") {
        let hogwartsHouse = hufflepuffArray;
        showStudents(hogwartsHouse)};
}

function showStudents(hogwartsHouse) {
    studentContainer.innerHTML = "";
    for (let i = 0; i < hogwartsHouse.length; i++) {
        let div = document.createElement("div");
        div.classList.add("student-card");
        div.style.backgroundColor = "rgb(107, 230, 134)";

        let img = document.createElement("img");
        img.classList.add("student-img");
        img.src = hogwartsHouse[i].image;
        if (hogwartsHouse[i].image === "") {
            img.src = hogwartsHouse[i].image = "/assets/avatar.png";
        }

        let studentName = document.createElement("h3");
        studentName.innerText = hogwartsHouse[i].name;

        let studentHouse = document.createElement("p");
        studentHouse.innerText = hogwartsHouse[i].house;
            if (hogwartsHouse[i].house === "Slytherin") {
                div.style.backgroundColor = "rgb(107, 230, 134)";
            } else if (hogwartsHouse[i].house === "Gryffindor") {
                div.style.backgroundColor = "rgb(151, 184, 226)";
            } else if (hogwartsHouse[i].house === "Hufflepuff") {
                div.style.backgroundColor = "rgb(231, 168, 226)";
            } else if (hogwartsHouse[i].house === "Ravenclaw") {
                div.style.backgroundColor = "rgb(231, 202, 140)"}

        let studentAge = document.createElement("p");
        if (hogwartsHouse[i].yearOfBirth == "") {
            studentAge.innerText = "Alder: uvisst"
        }
        else { studentAge.innerText = `Alder: ${(2022 - hogwartsHouse[i].yearOfBirth)} år`; }

        let studentAlive = document.createElement("p");
        if (hogwartsHouse[i].alive == false) {
            studentAlive.innerText = "I live: Nei";
            studentAlive.style.color = "red";
            studentAge.style.visibility = "hidden";
        }
        else {
            studentAlive.innerText = "I live: Ja"
        }

        div.append(studentName, img, studentHouse, studentAge, studentAlive);
        studentContainer.append(div);
    }
}

function renderData(hogwartsHouse) {
    houseMembers = studentArray.filter(function (data) {
      return data.house == hogwartsHouse;
    });
    showStudents(houseMembers);
  }


let createStudent = document.querySelector(".save-btn");
createStudent.addEventListener("click", () => {
  let src = "/assets/avatar.png";
  let studentName = document.querySelector(".name-input").value;
  let studentAge = document.querySelector(".age-input").value;
  let house = document.getElementById("houseList").value;
  if (studentName == "" || studentAge == "") {
    alert("Alle felt må fylles ut.");
  } else if (house === "none") {
    alert("Må velge et hus");
  } else if (isNaN(studentAge)) {
    alert("Fyll inn Årstallet du er Født");
  } else {
    house = document.getElementById("houseList").value;
    studentArray.push({
      image: src,
      name: studentName,
      house: house,
      yearOfBirth: studentAge,
    });
  }
  renderData(house);
});
fetchStudents();
