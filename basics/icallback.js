/*
 * callback -- a function passed as an argument to another function..
                allows a function to inwoke another function..
*/

function toConsole(text){
    console.log(text);
}

function toDOM(text){
    document.getElementById("mytext").innerHTML = text;
}

//callback function---
function setMessage(txt,Func){
    return Func(txt);
}

setMessage("Mahesh",toConsole);
setMessage("Mahesh",toDOM);


