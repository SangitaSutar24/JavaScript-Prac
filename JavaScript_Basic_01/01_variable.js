const accountId = 42321
let accountEmail = "abc@gmail.com"

/* Prefer not to use var
because of issue in block scope and functional scope. */

var accountPassword = "22123"
accountCity = "Bhubaneswar"

let accountState;

/* accountId = 235542 //it didn't take new value bcz it is const.
 so it is not change. It have fixed value. */

accountEmail = "dcv@gmail.com"
accountPassword = "11231"
accountCity = "Hyderabad"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);