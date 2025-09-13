//singelton - constructor
//Object.create - by using constructor

const mySym = Symbol("key1")
//Object literals
const JsUser = {
    name: "Vansh",
    "full name": "Vansh Sharma",
    age: 19,
    [mySym]: "mykey1",  //[] use to use as a symbol
    location: "Jaipur",
    email: "vansh@gmail.com",
    isLoggesIn: false,
    lastloggedIn: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser.full name) -- wrong
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

JsUser.email = "vansh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "vansh@msft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greetingTwo());