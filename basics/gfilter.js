//filter-- returns element of an array that
//      meets a condition specifie in a function


let ages = [3 ,65,33,22,7,16,43,22,15];

function adult(ele){
    if(ele>=18){
        return ele;
    } 
}

let adultlist = ages.filter(adult);
let mapp = ages.map(adult);
console.log(ages);
console.log(mapp);
console.log(adultlist);

