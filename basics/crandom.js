//random function----

//math.random()---which returns the pseudo-random between 0 - 1

var ranNum;

//ranNum=Math.random();
//ranNum=(Math.floor(Math.random() *6))       //0 - 5

function getRandomNum(min,max){
    var r=(Math.floor(Math.random() *(max-min)+min+1));
    return r;
}

console.log(getRandomNum(20,30))
console.log(ranNum);

