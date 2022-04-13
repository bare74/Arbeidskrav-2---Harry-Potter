import { API } from "./index.js";
const characterList = document.getElementById("characterList");
const searchBar = document.getElementById("searchBar");
// var src = document.getElementById("cards");
// img.src = `../assets/hplogo.jpeg`,
// src.appendChild(img); 

// const backGroundImg = {
//   Gryffindor: `../assets/avatar.png`,
//   Slytherin: `../assets/avatar.png`,
//   Hufflepuff: `../assets/avatar.png`,
//   Ravenclaw: `../assets/avatar.png`,
// };
var addCharacter = document.getElementById("characters-btn");
addCharacter.addEventListener("click", addCharacterBtn);

let charactersApi = [];
let y = [];

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

// const setBackground = (image) => {
//   document.body.style.background = "url(`"+backGroundImg.[image]+"`)";
// };

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((characters) => {
      // if (characters.house === "Gryffindor") {
      //   setBackground(`Gryffindor`)
      // } else {
      //   setBackground(`Slytherin`)
      // }
      // if (characters.house === "Gryffindor") {
      //   document.body.style.backGroundImgage = "url('../assets/hplogo.jpeg')";
      // }
      if (characters.hogwartsStaff === true) {
        //Delete character
        // for (var i = 0; i < charactersApi.length; i++)
        //   if (charactersApi[i].name === "Remus Lupin") {
        //     charactersApi.splice(i, 1);
        //     break;
        //   }

        if (characters.image === "") {
          return `<li class="characters" id="cards">
                    <h4>${characters.name}</h4>
                    <p>${characters.house}</p>
                    <span id="patronus">${characters.patronus}</span>
                   <img class="missing-characters" src="./assets/avatar.png" alt="Harry Potter characters"></img>
                   <button class="btn1" onclick = "deletecharacter(${characters})">DELETE</button>
                </li>`;
        }
        return `<li class="characters" id="cards">
                  <h4>${characters.name}</h4>
                  <p>${characters.house}</p>
                  <span id="patronus">${characters.patronus}</span>
                  <img src="${characters.image}"></img>
                  <button class="btn1" onclick = "deletcharacter(${characters})">DELETE</button>
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
    let text = "Trykk på ok for og lagre ! \n eller avbryt";
    if (confirm(text) == true) {
      y.unshift({
        hogwartsStaff: true,
        name: newstaff,
        house: newstaffhouse,
        patronus: patronus,
        image: `../assets/avatar.png`,
      });
    } else {
      text = "Karakteren ble ikke lagret";
    }
  }

  var z = charactersApi.concat(y);
  console.log(z);

  displayCharacters(z);
}
