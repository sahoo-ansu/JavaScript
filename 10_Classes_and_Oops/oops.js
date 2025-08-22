const user={
    username:'Ansuman',
    loginCount:5,
    signedIn:true,

    getUserDetails:function(){
        // console.log('got user details from database');
        console.log(`Username : ${this.username}`);          //Username : Ansuman
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne=new User('ansuman',5,true)
const userTwo=new User('ansu',3,false)
console.log(userOne.constructor)
