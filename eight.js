// strings
let str = "Once Upon A Time Upon Upon Upon";
console.log(str);
console.log(str.length);
console.log(str.includes("O"));
console.log(str.endsWith("e"));
console.log(str.replace("Upon","Apple"));
console.log(str.replaceAll("Upon","Apple"));
console.log(str.toLocaleLowerCase());
console.log(str.toUpperCase());
console.log(str[5]);

// *Strings are Immutible
let word ="hello" ;
console.log(word);
word[0] = "M";
console.log(word);

