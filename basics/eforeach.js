//forEach() = performs a function for 
//              each element in an array


let total = 0;
let cart=[5,6,7,8];

function cartSum(ele){
    total+=ele;
}

cart.forEach(cartSum);
console.log("your cart value is : $", total)