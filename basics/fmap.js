//map() -- performs a function for each element 
//          in an array,then stores the return values 
//          in a new array..

let cart=[3,4,5,6,7,8];

function increment(ele){
    return ele*=10;
}

let newCart = cart.map(increment);

console.log(cart);
console.log(newCart);