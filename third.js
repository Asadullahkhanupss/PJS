console.log("student")

let student = {
    name: "mike",
    age: 20,
    class: "10",
    number: 545421
};
// first method to getting a value of an object
console.log(student["class"]);

// second method to getting a value of an object
console.log(student.name);

// third method to getting a value of an object
for (let a in student) {
    console.log(a, student[a])
}

// logical operators

// OR
console.log("OR GATE");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(!false || false);

//  AND GATE
console.log("AND GATE");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(!false || !false);


//  PRE INCREMENT

// pehly add baad mein print (pre increment)
let a = 20;

console.log(a);

console.log(++a);

console.log(a);

// POST INCREMENT

// pehly print baad mein add (Post increment)


console.log(a++);

a += 10;

console.log(a)

// PRE DECREMENT

let b = 40;
console.log(b);
console.log(--b);
console.log(b);

b -=10;
console.log(b);

// POST DECREMENT

