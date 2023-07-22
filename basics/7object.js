/*

object -- container for properties and methods

property--value/variable that describes what an object has..
method-- functions that describes what an object do..
*/

var human = {
    name:"mahesh",
    age:21,

    walk: function(){
        console.log("mahesh is walking")
    },
    eat: function(){
        console.log("mahesh is eating")
    },
    sleep: function(){
        console.log("mahesh is sleeping..")
    }
}

console.log(human);

human.name;     //dot notation
human['name'];      //bracket notation..

console.log(human.name);
human.eat();
//method is defined by ()peranthesis..
human.walk();
human.sleep();


