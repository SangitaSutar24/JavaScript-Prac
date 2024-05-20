let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));

let ValueIntNumber = Number(score)
console.log(typeof ValueIntNumber);
console.log(ValueIntNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 & false => 0

//let isLogedIn = 1
let isLogedIn = " "

let BooleanIsLogedIn = Boolean(isLogedIn)

console.log(typeof BooleanIsLogedIn);
console.log(BooleanIsLogedIn);

// 1 => true & 0 => false
// "" => false 
// "Sangita" => true & " " => true

let someNumber = 33
let StringNumber = String(someNumber)

console.log(typeof StringNumber);
console.log(StringNumber);

//********************* Operation *********************//

let value = 3
let negValue = -value

console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(3**2);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello "
let str2 = "Sangita"

let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log(1 + 2 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + "2" + 2);

// console.log((3 + 4) * 5 % 8);

console.log(+true);
console.log(+"");
 

let gamecounter = 100
gamecounter++
++gamecounter
console.log(gamecounter);