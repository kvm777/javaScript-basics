/*
if statement----a basic form of decission makin..
            if a condition is true then do something...
            if not,then don't do it
*/

console.log("enter your age..");

var age=Number(window.prompt("enter an age"));

if(age>=18){
    console.log("you are an adult..!!")
}
else if(age>=60){
    console.log("you are a senior..!!")
}
else{
    console.log("yo are a child..")
}

var name=window.prompt("enter your name")

if(!(name=="")){
    console.log("hello",name);
}
else{
    console.log("you had not entered anything..")
}
