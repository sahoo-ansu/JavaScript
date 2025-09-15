function setUserName(username){
    //complex db calls
    this.username=username
}

function createUser(username,email,password){
    // setUserName(username)        // it sets the username in another context
    setUserName.call(this,username)     // it sets the username in this context     // call() lets you manually set "this"(context) and pass arguments individually.
    this.email=email
    this.password=password
}


const chai=new createUser('chai','chai@fb.com','chai123')
// console.log(chai);          //createUser { email: 'chai@fb.com', password: 'chai123' }    
console.log(chai);             //createUser { username: 'chai', email: 'chai@fb.com', password: 'chai123' }    //

