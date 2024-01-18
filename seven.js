let courses = ["JAVA" , "PYTHON", "C++", "C#" ,"JS"];
console.log(courses);
courses[3]= "DJANGO";

// BASIC FUNCTION
function hello() {
    console.log("HELLO WORLD");
}
hello();

// FUNCTION PARAMETERS

// function person(name ,age ,numbers) {
//     return name + " " + age + " " + numbers;
// }

// let userValue = person("his name is Harry" , "his age is 25" , "his number is 925451214");
// console.log(userValue);


// function firstperson(name ,age ,userclass, Courses) {
//     return name + " " + age + " " + userclass + Courses ;
// }
// let userValue = firstperson("my name is muhammad haziq" ,"i am 17 year old" , "i am studing in Aptech");
// let choice = user("MS OFFICE" ,"BMW" ,"SEO" ,"JS");

// console.log(userValue);

// let grade = prompt("Enter Your Grade");
// let result = grade =="A" || grade =="B" || grade =="C" ? "PASS" : "FAIL";
// console.log(result);


let grade = prompt("Enter Your Grade");
let per =prompt("Enter Your Percentage");
let myper = grade == "A+1" && per ==90 || grade == "A" && per ==80 || grade == "B" && per ==70 ? "PASS" : "FAIL" ; 
console.log(myper);

