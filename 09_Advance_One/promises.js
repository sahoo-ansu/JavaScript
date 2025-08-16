// promise - A Promise is an object representing the eventual completion or failure of an asynchronous operation.
const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
    console.log('return 1');
    return 1
})


new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('async task 2 is completed');
        resolve()
    },1000)
}).then(function(){
    console.log('async 2 resolved');
})


const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve({username:'ansuman',email:'ansuman@eg.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:'ansuman',email:'ansuman@eg.com'})
        }else{
            reject('Error: something went wrong!!')
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log('the promise is either resolved or rejected');
})


const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
        if(!error){
            resolve({username:'ansuman',email:'ansuman@eg.com'})
        }else{
            reject('Error: js went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response)
    }catch(e){
        console.log(e)
    }
}

consumePromiseFive()