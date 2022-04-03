const characterList = document.getElementById("characterList");
const searchBar = document.getElementById("searchBar");
const userApi = "http://hp-api.herokuapp.com/api/characters";

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
    const res = await fetch(userApi);
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
          return `<li class="characters">
                    <h4>${characters.name}</h4>
                    <p>${characters.house}</p>
                    <span class="span">${characters.patronus}</span>
                   <img class "missing-characters src="./assets/avatar.png" alt="Harry Potter characters"></img>
                </li>`;
        }
        return `<li class="characters">
                  <h4>${characters.name}</h4>
                  <p>${characters.house}</p>
                  <span class="span">${characters.patronus}</span>
                  <img src="${characters.image}"></img>
               </li>`;
      }
    })

    .join("");
  characterList.innerHTML = htmlString;
};

loadCharacters();
