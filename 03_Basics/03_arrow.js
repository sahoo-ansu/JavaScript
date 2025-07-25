const user={
    username:"ansuman",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        /*
        {
        username: 'ansuman',
        price: 999,
        welcomeMessage: [Function: welcomeMessage]
        }
        */        
    }
}

// user.welcomeMessage() 
// user.username="sam"
// user.welcomeMessage() 
/*sam, welcome to website
{
username: 'sam',
price: 999,
welcomeMessage: [Function: welcomeMessage]
}
*/        

// console.log(this)         //{}

// function one(){
//     const username="ansuman"
//     // console.log(this.username);    //undefined

//     console.log(this);
//     /*
//     <ref *1> Object [global] {
//     global: [Circular *1],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//         [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//         [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     structuredClone: [Function: structuredClone],
//     atob: [Function: atob],
//     btoa: [Function: btoa],
//     performance: [Getter/Setter],
//     fetch: [Function: fetch],
//     navigator: [Getter],
//     crypto: [Getter]
//     }
//     */
// }
// one()

// const one=function(){
//     const username="ansuman"
//     console.log(this.username);    //undefined
// }
// one()

const one = () =>{
    const username="ansuman"
    console.log(this.username);    //undefined
    console.log(this);     //{}
    
}
one()

// const addTwo= (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4));   //7

// const addTwo= (num1,num2) => num1+num2          //implicity return
// console.log(addTwo(3,4));    //7

// const addTwo= (num1,num2) =>(num1+num2)
// console.log(addTwo(3,4));    //7

const addTwo= (num1,num2) => ({username:"ansuman"})          //we can return a object like this
console.log(addTwo(3,4));    //{ username: 'ansuman' }