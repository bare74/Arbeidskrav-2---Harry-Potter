import { API } from "./index.js";
const characterList = document.getElementById("characterList");
const searchBar = document.getElementById("searchBar");
const image = document.createElement("img");
image.src = "../assets/hplogo.jpeg";

var addCharacter = document.getElementById("characters-btn");
addCharacter.addEventListener("click", addCharacterBtn);

let charactersApi = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filterCharacters = charactersApi.filter((characters) => {
    return (
      characters.name.toLowerCase().includes(searchString) ||
      characters.house.toLowerCase().includes(searchString)
    );
  });
  if (filterCharacters == "") {
    alert("Please type a Harry Potter characters / House ");
  }

  displayCharacters(filterCharacters);
});

const loadCharacters = async () => {
  try {
    const res = await fetch(API);
    charactersApi = await res.json();

    displayCharacters(charactersApi);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((characters) => {
      if (characters.hogwartsStaff === true) {
        if (characters.image === "") {
          return `<li class="characters" id="cards">
                    <h4>${characters.name}</h4>
                    <p>${characters.house}</p>
                    <span id="patronus">${characters.patronus}</span>
                   <img class="missing-characters" src="./assets/avatar.png" alt="Harry Potter characters"></img>
                   <button class="btn1" onclick="deletecharacter()">DELETE</button>
                </li>`;
        }
        return `<li class="characters" id="cards">
                  <h4>${characters.name}</h4>
                  <p>${characters.house}</p>
                  <span id="patronus">${characters.patronus}</span>
                  <img src="${characters.image}"></img>
                <button class="btn1" onclick="deletecharacter(${characters})">DELETE</button>
               </li>`;
      }
    })

    .join("");

  characterList.innerHTML = htmlString;
};

loadCharacters();

function addCharacterBtn() {
  var newstaff = document.getElementById("characters-input").value;
  var newstaffhouse = document.getElementById("characters-house-input").value;
  var patronus = document.getElementById("patronus-input").value;
  document.getElementById("characters-input").value = "";
  document.getElementById("characters-house-input").value = "";
  document.getElementById("patronus-input").value = "";

  if (newstaff === "") {
    alert("Fyll inn Navn på din karakter");
  } else if (newstaffhouse === "") {
    alert("Fyll inn Navn på huset");
  } else if (patronus === "") {
    alert("Fyll inn Navn på din patronus");
  } else {
    let text = prompt("Ønsker du og lagre din karakter? (ja/nei)");
    if (text == "ja") {
      charactersApi.unshift({
        hogwartsStaff: true,
        name: newstaff,
        house: newstaffhouse,
        patronus: patronus,
        image: `../assets/avatar.png`,
      });
    }
  }

  displayCharacters(charactersApi);
}

function deletecharacter(i) {
  if (confirm("Ønsker du og slette karakteren?")) {
    charactersApi.splice(i, 1);
    characterList.innerHTML = "";

    displayCharacters(charactersApi);
  }
}
