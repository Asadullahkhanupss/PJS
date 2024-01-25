let Mydiv =document.getElementsByClassName('container');
Mydiv[0].innerHTML = "hello world" ;

Mydiv[0].style.backgroundColor = "red" ;
Mydiv[0].style.height = "400px" ;
Mydiv[0].style.marginTop = "50px" ;
Mydiv[0].style.width = "800px" ;

let div1 =document.createElement('button');
div1.innerHTML = "Click Here !";

Mydiv[0].appendChild(div1);

div1.style.display = "block";
div1.className = `btn btn-dark`;
div1.style.letterSpacing = "14px";
div1.style.fontSize = "25px";


div1.addEventListener('click' , pen );
function pen() {
    console.log("This Button Is Click !");
    div1.textContent = "WOW";
}

let newInput =document.createElement('input');
newInput.className = `form-control mt-3` ; 
Mydiv[0].appendChild(newInput);

newInput.addEventListener('keyup' , key);

function key() {
    console.log("keyboard");
    newbtn.value = "" ;

}

let newbtn =document.createElement('button');
newbtn.innerHTML = "Remove Text";
Mydiv[0].appendChild(newbtn);
newbtn.className = `mt-3 mx-auto btn-dark` ; 
newbtn.style.display = "block";
newbtn.style.fontSize = "25px";
newbtn.style.letterSpacing = "12px";

newbtn.addEventListener('click' ,input1)

function input1() {
    newbtn.value = "" ;

}


