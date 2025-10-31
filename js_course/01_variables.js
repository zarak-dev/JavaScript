const accountId = 9300
let accountEmail = "Zarak@gmail.com"
var accountPassword = "32862"
const accountCity = "Mardan"
let accountState;

/* Prefer not to Use Var as it might create issue in Block Scope and Functional Scope */

console.log(accountEmail);
console.table([accountEmail, accountPassword, accountId, accountCity, accountState]);
