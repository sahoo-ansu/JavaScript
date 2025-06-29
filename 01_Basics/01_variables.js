const accountID=12345;
let accEmail="ansuman@gmail.com"
var accPass=4321
accCity="KDP"
let accountState;

// accountID=123 //not changable
/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

accEmail="ansu@gmail.com"
accPass=432
accCity="Bbsr"

console.log(accountID)
console.table([accountID,accEmail,accPass,accCity,accountState])
console.log(accountState)