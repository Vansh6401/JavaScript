// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }
// addTwoNumbers(3, "a")

function addTwoNumbers(number1, number2){
    let result1 = number1 + number2
    return result1
}
const result = addTwoNumbers(3, 5)   //gives undefined if we not return

// console.log("Result : ",result);

function loginUserMessage(username = "sam")//if no value is pass value is sam
{
    // if(!username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vansh")); //if we dont pass anything then it will show undefined
// console.log(loginUserMessage()); //undefined just logged in

//Bonus - if all the functions have the same name then their outputs are overridden by the last one

// function calculateCartPrice(num1) {
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500));

// function calculateCartPrice(num1) {
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500));

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 500,2000)); //val1 = 200, val2 = 400 and num1 = [500, 2000]

//Object
const User = {
    username : "Vansh",
    price : 199
}
function handleObject(anyobject) {
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(User)
handleObject({
    username: "Vansh",
    price: 399
})

//Array
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 600]));