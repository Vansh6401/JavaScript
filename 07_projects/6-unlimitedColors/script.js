const randomColor = function() {
    const hex = '0123456789ABCDEF'
    let color = '#';
    for(let i=0; i<6; i++)
    {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
console.log(randomColor);



let intervalId;

document.getElementById('start').addEventListener('click', function(){
    intervalId = setInterval(function(){
        document.body.style.backgroundColor = randomColor();
    }, 1000)
})

document.getElementById('stop').addEventListener('click', function(){
    clearInterval(intervalId)
    intervalId = null;
})


//By Chai aur code

// let intervalld;
// const startChangingColor = function ( ) {
//     if(!intervalId){
//         intervalld = setlnterval(changeBgColor,
//     l000) ;
// }
//     function changeBgColoor() {
//         document.body.style.backgroundColor = randomColor();
//     }
// }
// const stopChangingColor = function ( ){
//     clearIntervat(intervalld) ;
//     intervalld = null;
//     };

// document.querySetector('#start').addEventListener('click', startChangingColor);

// document.querySelector('#stop').addEventListener
// ('click', stopChangingColor);