// let myName='Ansuman   '

// console.log(myName.length);
// console.log(myName.trueLength())

let hero=['thor','spiderman']

let heroPower={
    thor:'hammer',
    spiderman:'sling',

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.ansuman=function(){
    console.log('ansuman is present in all objects')
}

Array.prototype.heyAnsuman=function(){
    console.log('ansuman says hello')
}

// heroPower.ansuman()  //ansuman is present in all objects
// hero.ansuman()      //ansuman is present in all objects

// hero.heyAnsuman()     //ansuman says hello
// heroPower.heyAnsuman()    //error(object has no property of name heyAnsuman )


//inheritance


const User={
    name:'ansuman',
    email:'ansuman@google.com'
}

const teacher={
    makingVideo:true
}

const teachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'js assignment',
    fulltime:true,
    __proto__:teachingSupport
}
TASupport.__proto__=User


//modern syntax

Object.setPrototypeOf(TASupport,teacher)


const anotherUser='ansuman        '

String.prototype.trueLength=function(){
    console.log(this)
    console.log(this.trim().length)
}

anotherUser.trueLength() 
//[String: 'ansuman        ']
//7      
'sahoo    '.trueLength()
'amit'.trueLength()