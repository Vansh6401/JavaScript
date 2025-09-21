const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()    //calling resolve it will now connect with .then
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

//we have to connect resolve and .then


//----------------------
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email:"chaiaurcode@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})



//----------------------
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Vansh", password: "123"})
        } else {
            reject('ERROR Something Went Wrong')
        }
    }, 1000)
})
//then is for resolve, catch is for reject
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username)=> {  //chaining
    console.log(username) 
})
.catch(function(eror){
    console.log(eror)
})
.finally(() => {console.log("Promise is either resolved or rejected")})



//-----------------------
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"javascript", password: "123"})
        } else {
            reject('ERROR: JS Went Wrong')
        }
    }, 1000)
});
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


//--------------

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))