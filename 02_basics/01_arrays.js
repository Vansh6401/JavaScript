const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

//Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()  //delete last element

// myArr.unshift(9) //adding element at start first
// myArr.shift() //delete first element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  // convert it into string
// console.log(myArr);

console.log("A", myArr); //A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)  //it don't change original array
console.log(myn1);  //[ 1, 2 ]
console.log("B", myArr);  //B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)  //it change original array
console.log(myn2); //[ 1, 2, 3 ]
console.log("C", myArr);  //C [ 0, 4, 5 ]

