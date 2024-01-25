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

let new1 =document.createElement('h2');
Mydiv[0].appendChild(new1);

new1.innerHTML = "this is h2 tag";

let new2 =document.createElement('img');
Mydiv[0].appendChild(new2);

new2.style.height = "500px";
new2.style.width = "100%";
new2.src = "car.jpg" ;

let mytag =document.getElementsByTagName('h5');
mytag[0].style.backgroundColor ="blue";
mytag[0].style.color ="yellow";
mytag[0].style.fontSize ="30px";
mytag[0].style.fontWeight ="900";
mytag[0].style.textAlign ="center";

