const array= [1,2,3]

// for(let i=0;i<array.length;i++){
//     array[i] =array[i]*2
// }

// console.log(array);

const result =[]
// for(let i=0; i<array.length;i++){
//     const a = array[i]*2
//     result.push(a)
// }

array.forEach(e=>{
    const a = e*2
    result.push(a)
});

console.log(result);
console.log(array);

// const result_map = array.map(function(result){
//     return result*2
// })
const multiplyBytwo = result=> result*2
const multiplyByten = result=> result*10
console.log(array.map(multiplyBytwo).map(multiplyByten));
console.log(array);

const pets = [
    {name:'Bebo'},
    {name:'Mano'}
]

const result_data = pets.map(e=>e.name)
console.log(result_data);

const fruits = ['banana','apple','mango']
// [
//     'Dat 1 eat banana',
//     'Dat 2 eat apple',
//     'Dat 3 eat mango'
// ]

const result_fruits =fruits.map((e,i,d)=>{
    return `Day ${i+1} eat ${e} ของเดิม ${d}`
})
console.log(result_fruits);