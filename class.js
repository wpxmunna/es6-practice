class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Hazi Ashraf Ali High School";
    }
}
const student1 = new Student (12, "Munna");
const student2 = new Student (18, "Tonmoy");

console.log(student1, student2);