

//modify HTML elements
//document.getElementBy() -- older
//document.querryselector() -- new and more powerful

const ModifyElements = document.body.querySelector("#mybutton");
ModifyElements.addEventListener("click", changeElemets)


function changeElemets(){

    const h1 = document.querySelector("#myh1");
    h1.innerText = "bye world....!!!";

    const h2 = document.querySelector("#myh2");
    const underline = document.createElement("u");
    underline.innerText = "bye..Bro";
    h2.innerText="";
    h2.append(underline);
 
    const p = document.querySelectorAll(".myp");
    const bold = document.createElement("b")
    bold.innerText="WHOOOAAAAAA....";
    p[0].innerText="";
    p[0].append(bold);
    p[1].innerText="gREATTTT";

    const p1 = document.querySelectorAll(".myp1");
    p1.forEach(element => element.innerText="oMGGG....:))");

    const b= document.querySelector("button");
    //b.remove();
    b.innerText="IT`S DONE...:)";
}


