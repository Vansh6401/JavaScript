// const tinderUser  = new Object()  //singleton object
// const tinderUser = {}  //non-singleton object - literals

//there is no difference between them output is same but they are called singleton and non-singleton

const tinderUser = {}
tinderUser.id = "1234abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Vansh",
            lastname: "Sharma"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"a", 1:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4) //use of {} -> Object.assign is having{target, source} target in which all source values are storing so in this values of obj1 and obj2 is store in {}. If we don't use {} in starting this values of obj2 and obj4 stored in obj1.

const obj3 = {...obj1, ...obj2, ...obj4} //spread operator

console.log(obj3);


const users = [
    {
        id:1,
        email:"v@gmail.com"
    },
    {
        id:1,
        email:"va@gmail.com"
    },
    {
        id:1,
        email:"van@gmail.com"
    },
    {
        id:1,
        email:"vans@gmail.com"
    },
    {
        id:1,
        email:"vansh@gmail.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //give arrays of object keys in array
console.log(Object.entries(tinderUser)); //create every object in array
console.log(tinderUser.hasOwnProperty('isLoggedIn'));