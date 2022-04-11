import { API } from "./index.js";
const characterList = document.getElementById("characterList");
const searchBar = document.getElementById("searchBar");
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

    console.log(charactersApi);
    displayCharacters(charactersApi);
  } catch (err) {
    console.error(err);
  }
};

// let backGroundImg = "url('../assets/hplogo.jpeg')";

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((characters) => {
      if (characters.house === "Gryffindor") {
        // document.getElementById"cards".style.backgroundImage =  backGroundImg;
      }
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

  y.push({
    name: newstaff,
    hogwartsStaff: true,
    house: newstaffhouse,
    patronus: patronus,
    image: `../assets/avatar.png`,
  });

  var z = charactersApi.concat(y);

  displayCharacters(z);
}
