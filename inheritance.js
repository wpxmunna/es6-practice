class Parent{
    constructor(){
        this.fatherName = "Abdul Alim"
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Munna");
const baby2 = new Child("Opi");

console.log(baby.getFullName());
console.log(baby2);