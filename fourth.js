// if elsa
let age =15;
if (age >=20) {
    console.log("YOU CAN CAST YOUR VOTE")    
}
if (age <=20) {
    console.log("YOU CAN NOT CAST YOUR VOTE")
}

if (age >=20) {
    console.log("YOU CAN CAST YOUR VOTE")
}
else{
    console.log("YOU CAN CAST YOUR VOTE")
}

// prompt user sy input lyta hai or uska output console py show krta hai

let mode = prompt(`
1)DARK
2)LIGHT
`
)
let color ;

if(mode === "DARK"){
    color = "BLACK";
}

if(mode === "LIGHT"){
    color = "WHITE";
}
console.log(color);


