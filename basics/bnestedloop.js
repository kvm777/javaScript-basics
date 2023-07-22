//nested loop---loop inside the other loop..

var symbol = window.prompt("enter your symbol..")
var row = window.prompt("no of rows..")
var column = window.prompt("number of columns..")

for(let i=0;i<row;i++){
    for (let j=0;j<column;j++){
        document.getElementById("pattern").innerHTML+=symbol;
    }
    document.getElementById("pattern").innerHTML+="<br>"
}