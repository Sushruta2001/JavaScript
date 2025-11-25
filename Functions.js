//1. Named function

// function hello(){
//     console.log("Hello")
// }

// hello()

//2. Anonymous function - the function which dowsnt have a name. It needs to be declared in a variable

// let a = function(){
//     console.log('hello')
// }

// a()

//3. Function expression - May be named or anonymous, when declared in a variable it is function expression


// let sum = function (a,b){
//     return a+b
// }

// console.log(sum(1,2))

// 4. Arrow function - Uses => and code becomes shorter

// let add = (a,b) => console.log(a+b)
// add(1,3)

//5. Immediately Invoked Function Expression (IIFE)

// (function add(a,b) {
//     console.log(a+b)
// }(1,2));



// 6. Callback functions - a function used as a argument to another function is called callback function

// function num(n,callback){
//     return callback(n)
// }

// let double = (n) => n+n

// console.log(num(5,double))
     

// function num(a,b,callback){
//     return callback(a,b)
// }

// function sum(x,y){
//     return x + y
// }

// function mul(c,d){
//     return c*d
// }


// console.log(num(3,4,sum))
// console.log(mul(4,5,mul))



//set timeout 
// console.log('start')
// setTimeout(a=()=>console.log('hello'),2000)
// console.log('end')



// 7. HOF (HIGHER ORDER FUNCTION) = When a function is passed as a parameter in another function

// function num(a,b,task){
//     let res = task(a,b)
//     return res
// }
// let add = num(10,20,function(x,y){
//     return x + y;
// })

// console.log(add())




// function hof(a,b,task){
//     return task(a,b)
// }

// function add(x,y){
//     return x+y
// }

// let result = hof(10,20,add)

// console.log(result)
