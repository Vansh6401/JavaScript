//for each loop

const coding = ["js", "pyhton", "java", "cpp", "ruby"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe) //we are just giving reference not printMe() executing

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

//---- foreach in array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "pyhton",
        languageFileName: "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName); //taking out property easily
} )




//we have to give callback function in foreach loop
//callback function have no name and have to give one parameter which will go to every item in array
//foreach never return 