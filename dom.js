// DOM > * document object model

let elem = document.getElementById('one');

elem.innerHTML = "Once Upon A Time";
elem.style.backgroundColor = "red" ;
elem.style.color = "yellow" ;
elem.style.textAlign = "center" ;
elem.style.padding = "12px" ;
elem.style.fontSize = "30px" ;

elem.classList.add('two');
elem.classList.remove('two');

elem.className = "first";

// elem.id = "wow";


let Mydiv = document.getElementsByClassName('container');
console.log(Mydiv);

Mydiv[0].innerHTML = "The Quik Brown fox";
Mydiv[0].style.color = "red";
Mydiv[0].style.backgroundColor = "whitesmoke";
Mydiv[0].style.fontSize = "35px";
Mydiv[0].id = "newid";

let newElem = document.createElement('p');
Mydiv[0].appendChild(newElem);

newElem.innerHTML = "this is p tag" ;

let newtag =document.createElement('img');
newElem[0].appendChild(newtag);
newtag.src = "https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp";