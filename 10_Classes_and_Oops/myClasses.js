//ES6

// class user{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }

//     encryptPassword(){
//         return this.password+"abc"
//     }

//     changeUsername(){
//         return this.username.toUpperCase()
//     }
// }

// const chai=new user('ansuman','ansuman@gmail.com',123)
// console.log(chai.encryptPassword());       //123abc
// console.log(chai.changeUsername());        //ANSUMAN


//behind the scene

function user(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

user.prototype.encryptPassword=function(){
    return this.password+'abc'
}

user.prototype.changeUsername=function(){
    return this.username.toUpperCase()
}

const tea=new user('ansuman','ansuman@fb.com',12345)

console.log(tea.encryptPassword());     //12345abc
console.log(tea.changeUsername());      //ANSUMAN

