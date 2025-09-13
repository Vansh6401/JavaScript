const user = {
    username: "Vansh",
    price: 999,
    welcomeMessage: function() {
        // console.log(`${this.username} welcome to website`); //this is used when we know if the value changes and we have use chnaged value.
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


//ArrowFunction
// function chai(){
//     console.log(this); //return object
// }
// chai()

// const chai = function() {
//     let username = "Vansh"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Vansh"
    console.log(this);
}
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2  //implicit return
// const addTwo = (num1, num2) => (num1 + num2) //use parenthesis directly print
//if you use curly braces you must use return {return (num1 + num2)}

const addTwo = (num1, num2) => ({username: "vansh"}) //for returning object you must wrap it in parenthesis
console.log(addTwo(3, 4));
