// Immediately Invoked Function Expressions (IIFE)

function check(){
    console.log("This function is written before iife function");
}
check();

(function chai(){
    //names iife
    console.log(`DB CONNECTED`);
})();
//if you want to write two iife then must use semi colon at the end of first one

((name) => {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);  
})('vansh')
