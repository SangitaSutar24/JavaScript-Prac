// Primitive :- 7 types - String, Number, Boolean, Null, Undefine, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLogedIn = false;
const isOutsideTemp = null;

let userEmail;

let id = Symbol('123')
let anotherId = Symbol('123')

//console.log(id == anotherId);

let BigNumber = 32797298778998889928n;

// Reference (Non-Primitive):- Array, Object, Functions

const fruits = ["apple", "mango", "banana", "kiwi"]

let myObj = {
    name : "Sangita",
    age : 26
}

let myFunction = function(){
    console.log("hello world");
    
}
console.log(myFunction);
// console.log(typeof(myObj));

//****************************** Stack & Heap *********************************//

// stack - use in Primitive Data Type
// Heap - use in Non - Primitive data Type

let myHome = "Bhubaneswar"

let myOffice = myHome
myOffice = "Hyderabad"

console.log(myHome);
console.log(myOffice);


let userOne = {
    email : "abc@google.com",
    upi : "abc@sbi"
}

let userTwo = userOne;

userTwo.email = "efg@google.com"

console.log(userOne.email);
console.log(userTwo.email);
