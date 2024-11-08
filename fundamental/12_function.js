function wakeup(){
console.log("Hey wakeup now")

}

function sayHello(name){
    console.log("Hay "+ name)
}

function calArea(width,height){
    var area = width*height;
    return area;
}

wakeup();
sayHello("NongB");
console.log("พื้นที่คือ " + calArea(3,4)+" ตรม.");

var action = function(a,b){
    return a*b;
}

var result = action(4,3);

console.log(action(4,3));
console.log(result);