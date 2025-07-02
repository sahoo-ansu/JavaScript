// primitive

// 7 types : String,Number,Boolean,Null,Undefined,Symbol,BigInt

const score=123
const scoreVal=123.12

const isLoggedIn=true
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId); //false


// Reference (Non-primitive)

// Array,Objects,Functions


const heros=["superman" , "shaktiman" , "Krish"];
let MyObj={
    name:"Ansuman",
    age : 21,
}


//we can store a function in a variable
let MyFunc=function(){
    console.log("Hello World!!");
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let name="amit"

let anothername=name
anothername="ansuman"

console.log(name);
console.log(anothername);

let obj1={
    email:"abc@gmail.com",
    upi:"abc@ybl"
}

let anotherObj=obj1
anotherObj.email="def@gmail.com"

// console.log(obj1.email)          // def@gmail.com
// console.log(anotherObj.email);    // def@gmail.com



