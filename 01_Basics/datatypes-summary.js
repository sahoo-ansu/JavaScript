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
    age : 21
}


//we can store a function in a variable
let MyFunc=function(){
    console.log("Hello World!!");
}
