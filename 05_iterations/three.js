//for of loop
const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    // console.log(num);
}

const greetings = "Hello World"

for(const greet of greetings){
    // console.log(`Each char is ${greet}`)
}

//Maps
const map = new Map()  //maps are unique and have object key value pair
map.set('IN', "India")
map.set('USA', "Unites States of America")
map.set('Fr', "France")

// console.log(map);

for(const [key, value] of map)
{
    // console.log(key, ":-", value);
}

//for of in object
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for(const [key, value] of myObject)  //this format not work in objects
{
    console.log(key, " :- ", value);
}

//for of loops are not applicable on objects good for arrays