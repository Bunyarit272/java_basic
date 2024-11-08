// alert("Hello Js")
document.writeln("Hello Js");
document.write("<b>ยินดีต้อนรับ</b>");
document.write("<h1><font color='red'>ยินดีต้อนรับจ้า<font></h1>");

var name = "NongB";
var age = 21;

console.log(name);

// var status=confirm("คิดถึงแฟนเก่าไหม");
// console.log(status);

// var msg=prompt("กรุณาป้อนชื่อ","บี");
// console.log(msg);

// votable=(age<=18)?"Too young":"Old enough";
// console.log(votable);

var age= 8;
if(age<=10){
    var x ="children";
}else if (age<=20) {
    var x ="Yung";
}else{
    var x ="old man";
}
console.log(x)

var day = new Date().getDay();
switch (day) {
    case 0:
        console.log("Sunday");
        document.body.style.backgroundColor="red";
        break;
    case 1:
        console.log("Monday");
        document.body.style.backgroundColor="skyblue";
        break;
    case 2:
        console.log("Tueday");
        document.body.style.backgroundColor="green";
        break;
    default:
        console.log("Invalid day");
        document.body.style.backgroundColor="white";
        break;
}