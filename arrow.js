const doubleIt = function myFun(num){
    return num * 2;
}
const result = doubleIt(5);
console.log(result);

const doubleItOne = num => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result1 = add(60, 70);
const result2 = give5();
const result3 = doMath(20, 10);
const result4 = doubleItOne(6);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
