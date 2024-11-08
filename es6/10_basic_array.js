const numbers= [10,20,30,40]
console.log(numbers.join())

let result = 0
    for(let i=0; i<numbers.length;i++){
        result+=numbers[i];
    }
    console.log(result);

const result_data = numbers.reduce((sum,numbers)=>{
    return sum+numbers
},0)

console.log(result_data);

const myarr1=[5,6,7]
const myarr2=[8,9,10]

const myresult=myarr1.concat(myarr2)
console.log(myresult)

const mutate =['red','green']
const count = mutate.push('blue')
console.log(mutate)

const pop = mutate.pop()
console.log(mutate);
console.log(pop);

const shift = mutate.shift()
console.log(mutate);
console.log(shift);

const unshift = mutate.unshift('red')
mutate.unshift('yellow')
console.log(mutate);
console.log(unshift);

const mutate_arr =['red','green','0','1','blue']
// const spliced = mutate_arr.splice()
// const spliced = mutate_arr.splice(0)
// const spliced = mutate_arr.splice(1)
// const spliced = mutate_arr.splice(1,1)
// const spliced = mutate_arr.splice(2,2)
const spliced = mutate_arr.splice(2,2,'white','pink')
console.log(mutate_arr);

console.log("------------------");

const mutate_arr1 = ['red','green','0','1','blue']
// const sliced = mutate_arr1.slice(1)
const sliced = mutate_arr1.slice(1,2)
console.log(sliced);

const fruits = ['banana','apple','mango']

// const newFruits =[
//     ...fruits.slice(0,1),
//     'strawbarry',
//     ...fruits.slice(1)
// ]
// console.log(newFruits);
// console.log(fruits);

const newFruits =[
    ...fruits.slice(0,1),
    ...fruits.slice(1)
]

console.log(newFruits);

const num_arr =['one','two','three']
num_arr.forEach(result=> {
    console.log(result);
})

for(const v of num_arr){
    if(v == 'two'){
        continue
    }
    console.log(v);
}

const num_arrays=[1,4,8,10,8,11,12]
const index=num_arrays.indexOf(8)
console.log(index);

const found = num_arrays.findIndex(e=> e%4==0)
console.log(found);