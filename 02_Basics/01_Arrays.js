// Array

myArr=[1,2,3,4,5]

console.log(myArr);    //[ 1, 2, 3, 4, 5 ]
console.log(myArr[0]);   //1

//Array methods

myArr.push(6)          // elements add in last
myArr.push(7)  
myArr.pop()            //elements delete from last
console.log(myArr)     //[ 1, 2, 3, 4, 5, 6]    

myArr.unshift(0);      // elements add in first
myArr.shift()          // elements delete from first
console.log(myArr)     //[1, 2, 3, 4, 5, 6]  

let newArr=myArr.join()
console.log(newArr)     //1,2,3,4,5,6     //type:-string

// slice, spice

let mn2=myArr.slice(1,3);    //return a part of an array, **it doesn't manipulate array**       //myArr.slice(x,y)  //x,y are index ,y not include
console.log(myArr)       //[ 1, 2, 3, 4, 5, 6 ]
console.log(mn2)         // [ 2, 3 ]

let mn3=myArr.splice(1,3)    //return a part of an array, **it manipulate array**         //myArr.splice(x,y)  //x,y are index ,y include
console.log(mn3);        //[ 2, 3, 4 ]
console.log(myArr);      //[ 1, 5, 6 ]



