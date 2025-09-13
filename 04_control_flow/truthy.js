// falsy values in if else
// 0, "", -0, BigInt 0n, false, null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

//checking empty array
const userEmail = []
if(userEmail.length == 0) {
    console.log("array is empty");
}

//object cehceking

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??): user for null undefined
// it is mianly used for cecking values coming from database if null value is coming it will try to check is their any other value also coming

let val1;
// val1 = 5 ?? 10 //op:5
val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 //op:10 ,1st value is assigned

console.log(val1);