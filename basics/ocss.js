
//add/delete CSS properties

document.querySelector("#but").onclick = function(){

    const h1= document.querySelector("#myh1");
    console.log(h1.style);

    h1.innerText="Nothing..!!";
    h1.style.color="blue";
    h1.style.backgroundColor="violet";

}