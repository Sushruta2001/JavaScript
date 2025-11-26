// let arr = [1,2,3,4]
// console.log(arr)

// arr.push(5)         //adds to the end of array
// console.log(arr)
// arr.pop()           //deletes last element
// console.log(arr)

// arr.unshift(8)      //adds element to the beginning 
// console.log(arr)

// arr.shift()
// console.log(arr);   //deletes array from the start

// console.log(arr.indexOf(3))  //returns index of the element

// console.log(arr.includes(2))    //returns true if the element is rpesent in the array and false if it is absent

// console.log(arr.at(3))          //returns the element present in the provided index

// let newarr = arr.slice(1,3)
// console.log(newarr)
// console.log(arr)

// //Slice doesnt manipulate the original array

// let newarr2 = arr.splice(1,3)
// console.log(newarr2)
// console.log(arr)

//Splice manipulates the original array


// let hero = [ 'Thor','Ironman','Captain America','Hulk']
// let dchero = ['Batman','Superman','Flash']

// // hero.push(dchero)

// let newheros = hero.concat(dchero)
// console.log(newheros);     //combines 2 arrays into a single array

// const newhero = [...hero,...dchero]    //spread operator spreads all the elements and merges it into new array
// console.log(newhero)

// let newarr = [1,2,3,[4,5],6,7,[8,[9,10]]]

// let realarr = newarr.flat(Infinity)       //flat returns all nested arrays into single array
// console.log(realarr)




//Filter

let arr = [1,2,3,4,5,6,7,8,9]

// let newarr = arr.filter((item) => item > 3 )
// let newarr1 = arr.filter((item) => {return item > 3 && item <6} )
// console.log(newarr);
// console.log(newarr1);



//Map 

let newarr = arr.map((item)=> item * 2)
console.log(newarr);
console.log(arr)

//Reduce


let nums = [1,2,3,4,5,6,7]

let initialval = 0
let a = (prev , curr) => prev + curr

let total = nums.reduce(a ,initialval)

console.log(total)
