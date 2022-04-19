




//--------------------Search Bar---------------//












//----------------------------------------------//


async function getStudents() {
    let url = 'http://hp-api.herokuapp.com/api/characters';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
  }


  
  async function gryffHouse() {
    let users = await getStudents();
    let html = '';
    users.forEach(user => {
      if((user.house === "Gryffindor") && (user.hogwartsStudent === true)){
        let htmlSegment = 
       `<div class="card">
       <div class ="gryffCard">
        <img class="user-img" src="${user.image}"</img>
          <div class="container">
          <ul>
          <li><h2>Name:${user.name}</h2></li>
          <li><h2>House:${user.house}</h2></li>
          <li><h2>Age:${"2022"- user.yearOfBirth}</h2></li>
          <li><h2>${user.alive === true}</h2></li>
            </ul>
          </div>
          </div>
        </div>
        </div>`;
  
        html += htmlSegment;
      
      } 
    });
  gryffHouse();
    let content = document.querySelector('.cards');
    content.innerHTML = html;
  }
  async function huffleHouse() {
    let users = await getStudents();
    let html = '';
    users.forEach(user => {
      if((user.house === "Hufflepuff") && (user.hogwartsStudent === true)){
        let htmlSegment = 
       `<div class="card">
       <div class="huffCard"> 
        <img class="user-img" src="${user.image}"</img>
          <div class="container">
          <ul>
          <li><h2>Name:${user.name}</h2></li>
          <li><h2>House:${user.house}</h2></li>
          <li><h2>Age:${user.yearOfBirth - "2020"}</h2></li>
          <li><h2>${user.alive}</h2></li>
            </ul>
          </div>
          </div>
        </div>
        </div>`;
  
        html += htmlSegment;
      
      } 
    });
    huffleHouse();
    let content = document.querySelector('.cards');
    content.innerHTML = html;
  }
  async function ravenHouse() {
    let users = await getStudents();
    let html = '';
    users.forEach(user => {
      if((user.house === "Ravenclaw") && (user.hogwartsStudent === true)){
        let htmlSegment = 
       `<div class="card">
       <div class="ravenCard">
        <img class="user-img" src="${user.image}"</img>
          <div class="container">
          <ul>
          <li><h2>Name:${user.name}</h2></li>
          <li><h2>House:${user.house}</h2></li>
          <li><h2>Age:${user.yearOfBirth - "2020"}</h2></li>
          <li><h2>${user.alive}</h2></li>
            </ul>
          </div>
          </div>
        </div>
        </div>`;
  
        html += htmlSegment;
      
      } 
    });
    ravenHouse();
    let content = document.querySelector('.cards');
    content.innerHTML = html;
  }
  async function slythHouse() {
    let users = await getStudents();
    let html = '';
    users.forEach(user => {
      if((user.house === "Gryffindor") && (user.hogwartsStudent === true)){
        let htmlSegment = 
       `<div class="card">
       <div class="slythCard"> 
        <img class="user-img" src="${user.image}"</img>
          <div class="container">
          <ul>
          <li><h2>Name:${user.name}</h2></li>
          <li><h2>House:${user.house}</h2></li>
          <li><h2>Age:${user.yearOfBirth - "2020"}</h2></li>
          <li><h2>${user.alive}</h2></li>
            </ul>
          </div>
          </div>
        </div>
        </div>`;
  
        html += htmlSegment;
      
      } 
    });
    slythHouse();
    let content = document.querySelector('.cards');
    content.innerHTML = html;
  }
 


