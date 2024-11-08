var person ={
    firstName:"bunyarit",
    lastName:"moraphat",
    age:"21",
    gender:"male",
    fullName:function(){
        return this.firstName+ " " + this.lastName;
    }
}

console.log(person.firstName);

console.log(person["lastName"]);

console.log(person.fullName());

var user ={
    id:"1",
    email:"bom@gmail.com",
    personalinfo: {
        name:"Bom",
        address:{
            line1:"255 nakorn",
            line2:"Bangna",
            city:"oo",
            zipcode:"3333"
        }
    }
}
console.log(user.personalinfo);
console.log(user.personalinfo.name);
console.log(user.personalinfo.address);
console.log(user.personalinfo.address.city);