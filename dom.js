// let div = document.getElementsByClassName('main-div')
// let newarr = [...div]
// console.dir(newarr)

// newarr.forEach(function (h){
//     h.style.backgroundColor = 'green'
//     h.style.padding = '10px'
// })

// let a = document.getElementsByTagName('ul')
// let ul = [...a]
// console.log(ul)

// ul.forEach(function (h){
//     h.style.backgroundColor = 'red'
//     h.innerHTML = 'Giga'
// })

// let new1 = document.querySelector('li')
// console.log(new1)

// let newArr = [...new1]

// newArr.style.backgroundColor = 'pink'

let btn = document.getElementsByClassName('btn')
console.dir(btn)

btn[0].addEventListener('click', function(){
    alert('hello')
})