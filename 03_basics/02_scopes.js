// var c = 300
let a = 300
if(true) {
    let a = 10
    const b = 20
    var c = 30  //var can use outside {} scope
    console.log("INNER: ", a);
}


console.log(a);
// console.log(b);
// console.log(c); 


//----Hoisting---- (Use or Can't use before declaration)

//this will not give error even if you call it before
console.log(addOne(5));
function addOne(num){
    return num + 1
}

addTwo(5) //this will give error
const addTwo = function(num){
    return num + 2
}