const name = "Sangita"
const myCode = 4563

console.log(`My name is ${name.toUpperCase()} and my code is ${myCode}`);

// create string
const gameName = new String("Sutar");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-4, 4)
console.log(anotherString);

const newStringOne = "    Sangita     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sangita/sangita%20sutar"
console.log(url.replace("%20", "-"));

console.log(url.includes("sangita"));
console.log(url.includes("SANGITA"));

const fruits = new String("apple-mango-banana-kiwi")
console.log(fruits.split("-"));

const num = 12345667
console.log(num.toString().split('').reverse().join(''));

const student = "Kabir"
console.log(student.toString().split('').reverse().join(''));
