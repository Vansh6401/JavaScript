const accountld = 144553
let accountEmail =  "hitesh@google.com"
var accountPassword = "12345"
accountCity =  "Jaipur"
let accountStatus;

// accountld = 2 // not allowed

console.log(accountld)
accountEmail = "hc@hc. com"
accountPassword = "21212121"
accountCity = "Bengaluru"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log( accountld);

console.table([accountld, accountPassword, accountEmail, accountCity, accountStatus])