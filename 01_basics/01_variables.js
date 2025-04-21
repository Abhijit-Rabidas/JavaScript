const accountId = 144553 // can't change value
let accountEmail = "abhijit@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

// accountId = 2 // not allowed
accountEmail = "ar@ar.com"
accountPassword = "374773"
accountCity = "Haldibari"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
 prefer not to use var
 because of issue in block scope and functional scope
*/
