//Dates

// let myDate = new Date()
// console.log(myDate);  //2025-08-15T19:08:40.223Z
// console.log(myDate.toString());  //Sat Aug 16 2025 00:38:40 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());  //Sat Aug 16 2025
// console.log(myDate.toLocaleDateString());  //16/8/2025
// console.log(typeof myDate);  //object

// let myCreatedDate = new Date(2023, 0 ,23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0 ,23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2024-01-14")
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));  //in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleDateString('default', {
    weekday: "long"
})