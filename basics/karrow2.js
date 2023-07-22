//arrow funtion =>

//map() filter() reduce()


//map() function..
let cart=[3,4,5,6,7,8];

let newCart= cart.map(value => value*0.85);

console.log(cart);
console.log(newCart);


//filter() function...

let ages = [3 ,65,33,22,7,16,43,22,15];

let adultlist = ages.filter(age => age>=18);
//let mapp = ages.map(adult);
console.log(ages);
//console.log(mapp);
console.log(adultlist);


//reduce() function...

let letters = ["h","e","l","p"];
let nums = [1,2,3,4,5,6,7,8,9];
/*
for the reduce function(accumulator,value,index,array)
function toCombine(total,ele){
    return total+ele;
}
*/
let word = letters.reduce((total,ele) => total+ele);
console.log(word);
let rword = letters.reduceRight((total,ele) => total+ele);
console.log(rword);


let sum = nums.reduce((t,e) => t+e);
console.log(sum);