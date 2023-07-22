
//methodoverriding -- 
//          a child class uses the same methods with the same
//          that are most commonly associated with..

class A{

    method(){
        console.log("in A class")
    }
}

class B extends A{

    method(){
        console.log("in B class")
    }
}

let obj = new B();
obj.method();



