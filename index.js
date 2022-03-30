const API = 'http://hp-api.herokuapp.com/api/characters';

async function fetchData() {
    try {
        const response = await fetch(API);
        const data = await response.json();
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}

fetchData();