const firstName = "Justin";
const lastName = "TimberLake";
const fullName = firstName + " " + lastName + " is a good boy";
// here we use ES6 template system for code formatting and any statement can be wrote
const fullName2 = `${firstName} ${lastName} is a good boy`;
const fullName3 = `${firstName} ${20+10+40} is a good boy`;
console.log(fullName);
console.log(fullName2);
console.log(fullName3);

const multiLine = "I love you"
    + "I miss you"
    + "I kiss you";

const multiLine2 = `I love you
I miss you
I kiss you `
console.log(multiLine);
console.log(multiLine2);