let body = document.getElementsByTagName('body')
console.log(body)

let startbutton = document.querySelector(".start")
console.log(startbutton)
let stopbutton = document.querySelector(".stop")


let randomcolor = function(){
    let hex = '123456789ABCDEF'
    let color ='#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        
    }

    return color
}


let startchange = function(){
    document.body.style.backgroundColor = randomcolor()
    }

let intervalid
let start = function() {
    intervalid = setInterval(startchange,1000)
    
} 




startbutton.addEventListener('click',start)


stopbutton.addEventListener('click',function () {clearInterval(intervalid)
    
})
