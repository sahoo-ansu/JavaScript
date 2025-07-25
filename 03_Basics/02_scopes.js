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

//closure

function one(){
    const username="ansuman"
    function two(){
        const website="youtube" 
        console.log(username);    //ansuman
    }
    // console.log(website);    //it gives error

    two()
}

one()


if (true) {
    const username="ansuman"
    if (username=="ansuman") {
        const website=" youtube"
        console.log(username+website);    //ansuman youtube
    }
    // console.log(website); //it gives error
}
// console.log(username);   //it gives error


//++++++++++++++++++++++++++++++++ Intresting ++++++++++++++++++++++++++++++++++++


console.log(addOne(5))      //6             //before initialization we can access the function if we declare like this 
function addOne(num){
    return num+1                             
}
console.log(addOne(5))      //6


// console.log(addTwo(5))        //error     // Cannot access 'addTwo' before initialization 
const addTwo=function(num){      
    return num+2
}
console.log(addTwo(5))      //7