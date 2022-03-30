const characterList = document.getElementById("characterList");
const searchBar = document.getElementById("searchBar");
let charactersApi = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filterCharacters = charactersApi.filter((characters) => {
    return characters.name.toLowerCase().includes(searchString);
  });
  if (filterCharacters == "") {
    alert("Please type a characters races");
  }

  displayCharacters(filterCharacters);
});

const loadCharacters = async () => {
  try {
    const res = await fetch("http://hp-api.herokuapp.com/api/characters");
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
        //     if (characters.image === "") {
        //       return `<li class="characters">
        //     <img class "missing-characters src="./img/hp.png" alt="Missing img">
        // </li>`;
        //     }
        return `
            <li class="characters">
                <h4>${characters.name}</h4>
                <p>${characters.house}</p>
                <p id="description">${characters.patronus}</p>
                <img src="${characters.image}"></img>
            </li>
        `;
      }
    })

    .join("");
  characterList.innerHTML = htmlString;
};

loadCharacters();
