//Singleton
//Object.create

//Object Literals

const mySym=Symbol("key1")

const JSuser= {                  //In js key is treated as string
    name:"Ansuman",
    "Full name":"Ansuman Sahoo",
    [mySym]:"key1",         //use symbol datatype as key
    email:"ansuman@facebook.com",
    location:"Bbsr"
}

console.log(JSuser);     //{ name: 'Ansuman', email: 'ansuman@facebook.com', location: 'Bbsr' }
console.log(JSuser.name);   //Ansuman
console.log(JSuser["name"]);   //Ansuman
// console.log(JSuser.Full name)  // we can't access the value like this, we should use another method
console.log(JSuser["Full name"]);    //Ansuman Sahoo       //prefer to use this type of access method

console.log(JSuser.mySym)   //undefined
console.log(JSuser[mySym]);   // key1       

console.log(JSuser);
/*{
  name: 'Ansuman',
  'Full name': 'Ansuman Sahoo',
  email: 'ansuman@facebook.com',
  location: 'Bbsr',
  [Symbol(key1)]: 'key1'
}*/

JSuser.email="ansuman@chatgpt.com"
// Object.freeze(JSuser)                 //further object can't be modifiable 
// JSuser.email="ansuman@microsoft.com"   //Here the email is not modify but not give the error
// console.log(JSuser);
/*
{
  name: 'Ansuman',
  'Full name': 'Ansuman Sahoo',
  email: 'ansuman@chatgpt.com',
  location: 'Bbsr',
  [Symbol(key1)]: 'key1'
}
*/

JSuser.greeting=function() {
    console.log("Hello JS user");
}
JSuser.greetingTwo=function(){
    console.log(`Hello JS user ${this.name}`)
}

console.log(JSuser.greeting);   //[Function (anonymous)]
console.log(JSuser.greeting()); 
/*
Hello JS user
undefined
*/
console.log(JSuser.greetingTwo);   //[Function (anonymous)]
console.log(JSuser.greetingTwo());
/*
Hello JS user Ansuman
undefined
*/


