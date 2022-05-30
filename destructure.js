// Object destructure
const person = { name: 'Jack William', age: 19, job: 'facebooking', gfName: 'Ema Watson', address: 'Mirpur', phone: 01717777777, friends:['Munna', 'Opi', 'Alif']};
const { gfName, address, salary, friends } = person;
console.log(gfName, address, salary,friends);

// Array Destructure
const ourFriends = ['Amir Khan', 'Salman Khan', 'Sharukh Khan', 'Shakib Khan'];
const [cotovai, ...rest] = ourFriends;
console.log(rest);

// Complex Object Data destructure
const complexObj = {
    name: 'abc',
    info:{
        add: 'Mirpur',
        leader: 'Tiger'
    }
}
const { leader } = complexObj.info
console.log(leader);