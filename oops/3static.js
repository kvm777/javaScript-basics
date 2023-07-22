
//static -- property or the method that belongs to class 
//          not any one object..



class Car{

    static num=0;
    static beginRace(){
        console.log("race has begun..!!")
    }
    
    constructor(year,color){
        console.log("this is return when we created onstuctor..");
        Car.num+=1;
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

}

let car1 = new Car(2022,"red");
let car2 = new Car(2021,"black");

console.log(Car.num);
Car.beginRace();