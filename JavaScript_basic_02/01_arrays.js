const myArr = [2, 6, 4, 8, 3, 7]
const myNames = ["Ram", "Hari"]

const myArr2 = new Array(2, 5, 7, 3, 9)

console.log(myArr[0]);

myArr.push(5)
myArr.pop()

myArr.unshift(9)
myArr.shift()

console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr);

// Slice, Splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)

console.log(myn2);
console.log("C", myArr);