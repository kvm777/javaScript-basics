
//mouse events
//element.addEventListener(type,function)

const d1 = document.querySelector("#mydiv")

d1.style.backgroundColor="grey";
d1.style.width="200px";
d1.style.height="200px";
/*
d1.addEventListener("click",e =>{
    console.log("you clicked the mouse");
    d1.style.backgroundColor="yellow";
})
*/
d1.addEventListener("mousedown",e =>{
    console.log("you are holding the mouse down");
    d1.style.backgroundColor="red";
})
//mouseup and mousedown are combined .... to work efficent
d1.addEventListener("mouseup",e =>{
    console.log("you let go of the mouse");
    d1.style.backgroundColor="black";
})

d1.addEventListener("dblclick",e =>{
    console.log("you double clicked the mouse!!");
    d1.style.backgroundColor="purple";
})

d1.addEventListener("mouseover",e =>{
    console.log("you entered the square!!");
    d1.style.backgroundColor="maroon";
})

d1.addEventListener("mouseleave",e =>{
    console.log("you leave the square!!");
    d1.style.backgroundColor="pink";
    d1.innerText="you leaved the SQUARE";
    d1.style.color="maroon"
    d1.style.textAlign="center";
    d1.style.fontSize="30px";
    
})

d1.addEventListener("mousemove",e =>{
    console.log("you are within the square!!");
    
})


