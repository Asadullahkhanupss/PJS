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
let a = 55;
let b = 65;
console.log("a+b is :",a+b);