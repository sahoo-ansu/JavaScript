function sayMyName(){
    console.log("Ansuman sahoo");
}
sayMyName      //it is a reference, nothing to print
sayMyName()      //Ansuman sahoo    //here the function execute


// function addTwoNos(num1,num2){
//     console.log(num1+num2)
// }

// addTwoNos(2,3)           //5
// const result=addTwoNos(2,3)      //5
// console.log(result);        //undefined   //because the function doesn't return any value


// function addTwoNos(num1,num2){
//     const result=num1+num2
//     return result
// }

// addTwoNos(2,3)           //nothing to print, because in function there is no console.log()
// const result=addTwoNos(2,3)      
// console.log(result);        //5


function addTwoNos(num1,num2){
    console.log("print from function");
    return num1+num2     //we can write like this,doesn't need to store
}

addTwoNos(2,3)           //print from function
const result=addTwoNos(2,3)        //print from function
console.log(result);        //5


// function loginUserMessage(userName){
//     return `${userName} just loggedd in`
// }

// loginUserMessage("ansuman")                  //nothing to print here, because the function is returned something not printing something
// console.log(loginUserMessage("ansuman"));     //ansuman just loggedd in
// console.log(loginUserMessage());               //undefined just loggedd in


// function loginUserMessage(userName){    
//     if(userName===undefined){      //if(!userName)    //by default undefined means false   //if loop used for handle empty string
//         console.log("Please enter a valid username");
//         return
//     }
//     return `${userName} just loggedd in`
// }

// console.log(loginUserMessage("ansuman"));     //ansuman just loggedd in
// console.log(loginUserMessage()); 
/*
Please enter a valid username
undefined
*/


//default parameter
function loginUserMessage(userName="sam"){    
    return `${userName} just loggedd in`
}

console.log(loginUserMessage());    //sam just loggedd in      //if the empty string passed then it by default takes the default value
console.log(loginUserMessage("ansuman"));     //ansuman just loggedd in