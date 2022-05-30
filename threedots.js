const ages = [18, 20, 22, 34, 50];
const ages2 = [39, 29, 48, 19];
const ages3 = [10, 12, 18, 19, 29];

// const allAges = ages.concat(ages2).concat(ages3); /bad practice 

// Using ES6 spread operator
const allAges = [...ages, ...ages2, 5 , ...ages3];
console.log(allAges);

// Maximum Value finding

const business = 650;
const minister = 500;
const secretary = 430;
const takaPoisa = [650, 500, 430, 800];

const maximum = Math.max(business, minister, secretary);
console.log(maximum);
const maximum2 = Math.max(...takaPoisa);
console.log(maximum2);