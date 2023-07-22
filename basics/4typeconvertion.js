//type convertions


var age = window.prompt("enter your age");

console.log("type of input", typeof age);
age=Number(age);         //type convertion string o number
console.log("type of after convetion" ,typeof age);
console.log("Happy..Birthday!!!")
age+=1;
console.log("your age is",age)

age=String(age);

age+=1;
console.log("age after convert from number to string:",age)