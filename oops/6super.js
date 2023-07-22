
//super -- reference to to the parent class
//         very similar to "this" keyword
//         can use a super classes : constructor,methods

class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    welcome(){
        console.log("hello",this.name);
        console.log("you are",this.age,"years old");
    }
}


class Student extends Person{
    constructor(name, age, gpa){
        super(name,age);
        this.gpa=gpa;
    }

    hello(){
        super.welcome();
        console.log("your gpa is",this.age);
    }
}

class Teacher extends Student{
    constructor(name, age, classSize){
        super(name,age);
        this.classSize=classSize;
    }
    hello(){
        super.welcome();
        console.log("your classSize is",this.classSize);
    }
}

let student1 = new Student("Mahesh",21,9.5);
let teaher1 = new Teacher("Robin",40,33);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);

console.log(teaher1.name);
console.log(teaher1.age);
console.log(teaher1.classSize);

student1.hello();
teaher1.hello();
