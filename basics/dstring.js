//string 

var myName = "Mahesh Korada magiccccc";

console.log(myName.length);
console.log(myName.charAt(5));
console.log(myName.indexOf(" "));
console.log(myName.slice(7));    //which slices from 7th index
console.log(myName.slice(0,6));
console.log(myName.slice(0,myName.indexOf(" ")));
//console.log(myName.split(0,myName.indexOf(" ")));
console.log(myName.slice(myName.lastIndexOf(" ")+1));
//console.log(myName.split(0,myName.lastIndexOf(" ")));

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

var num="123-456-7890";

console.log(num.replace("-",""));
console.log(num.replaceAll("-",""));

