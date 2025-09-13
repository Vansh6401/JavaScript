// const score = 400
// console.log(score);

// const balance = new Number(100)  //defining in object wiht specific Number type
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));  // decimal zeroes

// const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(4)); // it will round off upto to four digits it always give output in string

// const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN')); //it will mark comma in indian standards

//Number.MIN_VALUE
//Number.MAX_VALUE


//-------------------------MATHS------------------------

console.log(Math);  //it will print object which is having properties and it will diplay perfect on browser

console.log(Math.abs(-4));  //convert negative value to positive

console.log(Math.round(4.2));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(2,4,3,5,4,3));
console.log(Math.max(2,4,3,5,4,3));

console.log(Math.random()); //random value between 0 and 1
console.log((Math.random()*10) + 1); //shifting decimal +1 if for minimum value 1 not 0
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() *(max - min + 1)) + min);
//(max-min + 1) is for range between 10 and 20