var greet = function(name,message) {
    return message + name
}
console.log(greet("NogB","Hello "));

// var arrowGreet = (name,message) =>{
//     return message + name
// }

//ลดรูป
// var arrowGreet = (name,message) =>message + name
// console.log(arrowGreet("NongBB","Hello "))
//ลดรูปถ้ามี paramiter เดียว
var arrowGreet = message => message 
console.log(arrowGreet("Hello nong nong "))

var square = x=> x*x
console.log(square(3))