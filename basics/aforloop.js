/*
for loop---repeat a loop a liited number of times..
    for (intiation;condition;step) 
*/

/*
var myvar=window.prompt("enter anything..")

while(myvar==""){
    myvar=window.prompt("enter anything");
}

console.log("perfect..")
*/
/*
let i=0
for (;i<=10;i++){
    console.log(i);
}
*/
var list=["H","E","L","P"];

console.log("normal method..");
for(let i=0;i<list.length;i++){
    console.log(list[i]);
}

console.log("best way...")
for(let i in list){
    console.log(i,list[i]);
}

let thing = {
    colour:"blue",
    size:"medium",
    material:"plastic",
    speciality:"nothing.."
}

for (let i in thing){
    console.log(i,":",thing[i]);
}



