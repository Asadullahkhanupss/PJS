
let btn = document.getElementById('togglebtn');
let body = document.getElementById('body');
let para = document.getElementById('para');

btn.addEventListener('click' , theme);
function theme() {
if (btn.textContent.includes('Dark')) {
    body.style.backgroundColor = "black" ;
    btn.textContent = "light"
}
else{
    body.style.backgroundColor = "white" ;
    btn.textContent = "dark"

}

}


