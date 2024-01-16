let heroes = ["Spider Man","Iron Man","Hulk","Bat Man"];
console.log(heroes);
console.log(heroes[1]);

// Array Methods
//LIST MAI ADD KRTA HAI PUSH
console.log("PUSH");
console.log(heroes.push("New Man"));
console.log(heroes);
//POP END KI VALUE KO REMOVE KRTA HAI
console.log("POP");
console.log(heroes.pop());
console.log(heroes);
// SHIFT FIRST INDEX VALUE KO REMOVE KRTA HAI
console.log("SHIFT");
console.log(heroes.shift());
console.log(heroes);
// UNSHIFT FIRST MEIN VALUE ADD KRTA HAI
console.log("UNSHIFT");
console.log(heroes.unshift("Old Man"));
console.log(heroes);

// SLICE
//VALUE KO GET KRTA HAI 
console.log("SLICE");
console.log(heroes.slice(1,4));

//SPLICE
//PEHLY TARGET OR PHR DELETE
console.log("SPLICE");
console.log(heroes.splice(1,1 ,"Apple" , "Mango" ,"Banana"));
console.log(heroes);

let bbq =["Tikka","Behari Boti","Chapli Kabab"];
let seaFood =["Fish","Lobster","Prawns"];
let sweetDish =["Custurd","Gulab Jamun","Halwa" ,"Ice Cream"];

let menu = bbq.concat(seaFood, sweetDish);
console.log(menu);

for (let a in bbq){
    console.log(bbq[a]);
}

