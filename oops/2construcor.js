

//constructor -- a special method for assigning properies..
//          ****  automatically called when crating an object..

// this keyword -- a reference to the object 
//                 that we are working with


class Car{ 

    constructor(year,color){
        console.log("this is return when we created onstuctor..");
        this.color = color;
        this.year = year;
    }

    drive(){
        console.log("you are driving car..!!");
    }
    breaks(){
        console.log("car is stoping...");
    }
    colormethod(){
        console.log("your car color is",this.color);
    }

    whatIsThis(){
        return this;
    }
}

let car1 = new Car(2022,"red");
console.log(car1.year);
console.log(car1.color);
car1.colormethod();
console.log(car1.whatIsThis());
