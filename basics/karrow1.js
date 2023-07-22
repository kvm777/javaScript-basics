
//arrow function =>
//shortcut for a function expression..

let hello;

//function expression

hello = function(){
    return "hello Mahesh..";
}

console.log(hello);
console.log(hello());
//arrow function..

hello = () => "Hello mahesh ";

console.log(hello);
console.log(hello());

//no need of peranthesis () for single aurgment passing to a function..
//if more than 1 aurgments are pasing to a function we need (x,y,z)
let hello1;
let hello2;
let x = "yooooo....!!"
let y = "brooo..!!!"

hello1 = x => x+" Hello mahesh ";
console.log(hello1(x));

hello2 = (x,y) => x+y;
console.log(hello2(x,y));

//arrow function for mre than one line..as follows
console.log("arrow function for more than one lines code..")
let hello3;
hello3 = (x,y) => {
    console.log(x);
    console.log(y);
}

hello3(x,y);