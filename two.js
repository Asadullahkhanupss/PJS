let mydata = {
    name : "hamza",
    age : "20",
    city : "karachi",
    grade : 'B',

}
// first method
console.log(mydata.name)
console.log(mydata.age)
console.log(mydata.city)

// second method
console.log(mydata["grade"])

// for in loop third wat to getting all the values from an object
for (let a in mydata){
    console.log(a ,mydata [a]);
}

// ARTHIMATIC OPERATIONS

let a = 55;
let b = 65;
console.log("The sum of a+b is :",a+b);
console.log("The mult of a*b is :",a*b);
console.log("The sub of a-b is :",a-b);
console.log("The div of a/b is :",a/b);
console.log("The modul of a%b is :",a%b);