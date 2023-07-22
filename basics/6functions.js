/*
    functions are the block of the code to perform 
    a particular task /procedure..

*/

function sayHello(name,age){
    console.log("hello",name);
    console.log("your age is",age+1);
    console.log(some);
}
some="mahesh"
sayHello("mahesh",21)

function tocelcius(f){
    var r = (f-32)*5/9;
    return r
}

function tofarenheat(c){
    var r=(c*9/5)+32;
    return r;
}

c= tocelcius(100);
console.log("my temp in celsius",c);

f=tofarenheat(60);
console.log("my temp in farenheat is",f);
