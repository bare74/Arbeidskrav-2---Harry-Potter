// first outcast


//---------------------Searcbar---------------------//

//--------------------------------------------------//

fetch(`http://hp-api.herokuapp.com/api/characters/house/Ravenclaw`).then((data)=>{
            let info = data.json();
            return info;
        }).then((data)=>{
            characterRavenclaw(data);
        }).then((data)=>{
            characterGryffindor(data);
        })


        function characterRavenclaw(data){

            var ravenclaw = document.querySelector(".ravenclaw");
            for(var i = 0;i<data.length;i++){

                let box = document.createElement("div");
                box.setAttribute("class","box");
                let content =document.getElementById("content");

                ravenclaw.appendChild(box);
                box.innerHTML = `<h2>${data[i].name}</h2>
                                <img src="${data[i].image}"></img>
                                <div class="info">
                                    <p>Gender:- ${data[i].gender}</p>
                                    <p>House:- ${data[i].house}</p>
                                    <p>DateOfBirth:- ${data[i].dateOfBirth}</p>
                                    <p>Alive : ${data[i].alive === true}</p>
                                </div>`;
                 
            }
        }
//------------------------------------------------------------------------//
        fetch(`http://hp-api.herokuapp.com/api/characters/house/Gryffindor`).then((data)=>{
            let info = data.json();
            return info;
        }).then((data)=>{
            characterGryffindor(data);
        })


        function characterGryffindor(data){
            
            var gryffindor = document.querySelector(".gryffindor");
            for(var i = 0;i<data.length;i++){
                let box = document.createElement("div");
                box.setAttribute("class","box");
                let content =document.getElementById("content");

                gryffindor.appendChild(box);
                box.innerHTML = `<h2>${data[i].name}</h2>
                                <img src="${data[i].image}"></img>
                                <div class="info">
                                    <p>Gender:- ${data[i].gender}</p>
                                    <p>House:- ${data[i].house}</p>
                                    <p>DateOfBirth:- ${data[i].dateOfBirth}</p>
                                    <p>Alive : ${data[i].alive === true}</p>
                                </div>`;
                 
            }
        }
//---------------------------------------------------//
fetch(`http://hp-api.herokuapp.com/api/characters/house/HUfflepuff`).then((data)=>{
    let info = data.json();
    return info;
}).then((data)=>{
    characterHufflepuff(data);
})


function characterHufflepuff(data){
    
    var hufflepuff = document.querySelector(".hufflepuff");
    for(var i = 0;i<data.length;i++){
        let box = document.createElement("div");
        box.setAttribute("class","box");
        let content =document.getElementById("content");

        hufflepuff.appendChild(box);
        box.innerHTML = `<h2>${data[i].name}</h2>
                        <img src="${data[i].image}"></img>
                        <div class="info">
                            <p>Gender:- ${data[i].gender}</p>
                            <p>House:- ${data[i].house}</p>
                            <p>DateOfBirth:- ${data[i].dateOfBirth}</p>
                            <p>Alive : ${data[i].alive === true}</p>
                        </div>`;
         
    }
}
//-------------------------------------------------------//
fetch(`http://hp-api.herokuapp.com/api/characters/house/Slytherin`).then((data)=>{
    let info = data.json();
    return info;
}).then((data)=>{
    characterSlytherin(data);
})


function characterSlytherin(data){
    
    var slytherin = document.querySelector(".slytherin");
    for(var i = 0;i<data.length;i++){
        let box = document.createElement("div");
        box.setAttribute("class","box");
        let content =document.getElementById("content");

        slytherin.appendChild(box);
        box.innerHTML = `<h2>${data[i].name}</h2>
                        <img src="${data[i].image}"></img>
                        <div class="info">
                            <p>Gender:- ${data[i].gender}</p>
                            <p>House:- ${data[i].house}</p>
                            <p>DateOfBirth:- ${data[i].dateOfBirth}</p>
                            <p>Alive : ${data[i].alive === true}</p>
                        </div>`;
         
    }
}