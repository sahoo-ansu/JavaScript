//Imediately Invoke Function Express (IIFE)

//named IIFE
(function one() {
    console.log("this is one")       //this is one
})();        //there is two bracket:-()(). 1st bracket is for write function and 2nd bracket is for execution. 
//if we include more than one IIFE in a code file then we should end the IIFE using semicolun(;) otherwise it gives error because js doesn't know when to stop.

//Un-named IIFE
( () => {
    console.log("this is arrow function");
} )();           //this is arrow function

( (name) => {
    console.log(`this is arrow function ${name}`);
} )("ansuman");     //this is arrow function ansuman    //we can use parameter like this