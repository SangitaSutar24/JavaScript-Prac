let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreateDate = new Date(2024, 0, 10)
console.log(myCreateDate.toString());

let myCreateDate1 = new Date(2024, 0, 10, 5, 3)
console.log(myCreateDate1.toLocaleString());

let myCreateDate2 = new Date("2024-01-14")
console.log(myCreateDate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long"
})