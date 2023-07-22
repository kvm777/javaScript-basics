

//inheritance -- useful for code reusabilty
//               reuse properties or methods of excisting class
//               child class that inherites from parent class..


class A{
    metA1(){
        console.log("in A class metA1")
    }
}

class B extends A       //single level inheritance..
{
    metB1(){
        console.log("in B class metB1")
}
}

class C extends B       //multi- level inheritance..
{
    metC1(){
        console.log("in C class metC1")
    }
}

let obj = new C();
obj.metC1();
obj.metB1();
obj.metA1();


