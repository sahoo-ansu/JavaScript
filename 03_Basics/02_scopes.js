{
    //block scope
}


// let a=10
// const b=20
// var c=30

// console.log(a);  //10
// console.log(b)   //20
// console.log(c);  //30

var c=300
let a=500

if(true){     
    let a=10
    const b=20
    var c=30      //c=30
    console.log("INNER a:",a);    //INNER a: 10
}

// console.log(a);  //it gives error:-(a is not defined) because a declared in local scope i.e in if loop/scope
// console.log(b)   //also give error(same error)
// console.log(c);  //30     //the value of global variable is changed so var creates problem 
 
console.log("GLOBAL a:",a);     //GLOBAL a: 500

/*
Block of web-browser(inspect->console) different from block of node(code environment like in vs-code)
*/





