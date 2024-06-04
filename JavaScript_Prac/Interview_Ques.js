// 1.
function foo(a, c, ...rest){
    console.log(a, c, rest);
}

foo(1, 2, 3, 4, 5)

// 2.
var x = 20

function foo(){
    console.log(x);
    var x = 10
}

foo()

// 3.

console.log(name)
var name = 'Jhon'

// 4.

setTimeout(()=>{
    console.log("Timeout");
}, 0)
Promise.resolve().then(()=>
    console.log(Promise)
)
console.log("End");