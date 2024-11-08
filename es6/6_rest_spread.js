// const arr=[4, 5, 6]
// const append = [1, 2, 3, arr]
// console.log(append);

const arr=[4, 5, 6]
const append = [1, 2, 3, ...arr]
console.log(append);


const arr1 =['a','b','c']
const arr2 =['d','e','f']
arr1.push(...arr2)
console.log(arr1)

function add(x,y,z){
    return x + y + z
}
const numbers =[1,2,3]
const sum = add(...numbers)
console.log(sum);


function multiply(multiply, ...array){
    console.log(array)
    return array.map(e=>multiply*e)
}
const result=multiply(2,10,20,30)
console.log(result)