class Person {
    constructor(name){
        this.name = name
    }
    sayHi(){
        console.log('Hi my name is '+ this.name)
    }

    get gender(){
        return this._gender
    }

    set gender(g){
        this._gender = g
    }
}
const P = new Person('NongB')
console.log(P.name);
P.sayHi()

P.gender ="male"
console.log(P.gender)