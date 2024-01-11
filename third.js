console.log("student")

let student = {
    name : "mike",
    age : 20,
    class : "10",
    number : 545421
};
// first method to getting a value of an object
console.log(student["number"]);

// second method to getting a value of an object
console.log(student.name);

// third method to getting a value of an object
for (let a in student){
    console.log(a ,student[a])
}