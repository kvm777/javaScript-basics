
//why we use getters and setters..???

//a way get or set of objets
//secures better data quality
//does extra things behind the sceens..


class User{
    constructor(first,last){
        this.first=first;
        this.last=last;
    }
    set first(value){
        this.FirstName = value.toUpperCase();
    }

    set last(value){
        this.LastName = value.toUpperCase();
    }

    get fullName(){
        return this.FirstName+" "+this.LastName;
    }

}

let user1 = new User("Mahesh","korada");

console.log(user1.fullName);
