/*
clousur with aurgments..
*/
function makeSize(size){
    return function(){
    document.body.style.fontSize= size+"px";
}
}

function fontType(font){
    return function(){
    document.body.style.fontFamily = font;
}
}

let size20 = makeSize(20);
let size30 = makeSize(30);
let size40 = makeSize(40);

let fontInkfree = fontType("Ink Free");
let fontConsolas = fontType("consolas");
let fontCouriourNew = fontType("Courier New");


size20();
size30();
size40();

fontInkfree();
fontCouriourNew();
//fontConsolas();
