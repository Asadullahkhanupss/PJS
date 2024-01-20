let userName =prompt("Enter Your Name");
console.log(userName);
let subject1 =parseInt(prompt("Enter Your URDU"));
let subject2 = parseInt(prompt("Enter Your ENGLISH"));
let subject3 = parseInt(prompt("Enter Your MATHS"));
let subject4 = parseInt(prompt("Enter Your ISLAMIAT"));
let subject5 = parseInt(prompt("Enter Your PAK-STUDY"));


let ObtainMarks = subject1 + subject2 + subject3 + subject4 + subject5 ;
console.log(ObtainMarks);

let per = ObtainMarks/500*100
console.log(per);

if (per >=90 && per<=100) {
    console.log("Your Grade IS A+1");
}
else if(per >=80 && per<=90) {
    console.log("Your Grade IS A+");
}
else if (per >=70 && per<=80) {
    console.log("Your Grade IS B");
}
else if (per >=60 && per<=70) {
    console.log("Your Grade IS C");
}

else if (per >=50 && per<=60) {
    console.log("Your Grade IS D");
}
else{
    console.log("You Are Fail !");
}









