function sayHi(name){
    var name = name || 'B'
    console.log("Hi "+name);

}
sayHi()
sayHi("NongB")

function sayHi(name = "B"){
    console.log("Hi "+name);

}
sayHi()
sayHi("NongB")
