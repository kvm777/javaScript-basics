/*
reduce() -- reduces an array to a single value
            the return of the callback function is
            the accumulated result, ansd is provided as an argument
            in the next call to the call back functiin.
*/

let letters = ["h","e","l","p"];
let nums = [1,2,3,4,5,6,7,8,9];

//for the reduce function(accumulator,value,index,array)
function toCombine(total,ele){
    return total+ele;
}

let word = letters.reduce(toCombine);
console.log(word);
let rword = letters.reduceRight(toCombine);
console.log(rword);


let sum = nums.reduce(toCombine);
console.log(sum);
