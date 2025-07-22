// const tinderUser=new Object()  //singleton object
const tinderUser={}      //non-singleton object              //but both are same
// console.log(tinderUser);  //{}

tinderUser.id="abc123"
tinderUser.name="abc"
tinderUser.mail="abc@gmail.com"

// console.log(tinderUser);    // { id: 'abc123', name: 'abc', mail: 'abc@gmail.com' }

const regularUser={
    email:"abc@gmail.com",
    fullname:{
        username:{
            firstname:"ansuman",
            lastname:"sahoo"
        }
    }
}

// console.log(regularUser.fullname.username.firstname)   //ansuman

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
// console.log(obj3);    //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);         //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3={...obj1,...obj2}     //spread method
// console.log(obj3);      //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users=[
    {
        id:123,
        mail:"a@gmail.com"
    },
    {
        id:423,
        mail:"b@gmail.com"
    },
    {
        id:523,
        mail:"c@gmail.com"
    }
]                       //array of objects
// console.log(users[1].id);    //423

// console.log(tinderUser);      //{ id: 'abc123', name: 'abc', mail: 'abc@gmail.com' }

// console.log(Object.keys(tinderUser))     //[ 'id', 'name', 'mail' ]
// console.log(Object.values(tinderUser));   //[ 'abc123', 'abc', 'abc@gmail.com' ]
// console.log(Object.entries(tinderUser));   //[ [ 'id', 'abc123' ], [ 'name', 'abc' ], [ 'mail', 'abc@gmail.com' ] ]

// console.log(tinderUser.hasOwnProperty('id'));  //true
// console.log(tinderUser.hasOwnProperty('ID'));  //false


const course={
    courseName:"JavaScript",
    price:"999",
    courseInstructor:"xyz"
}

console.log(course.courseInstructor);    //xyz

// de-structure

// const {courseInstructor}=course      //now we can use only courseInstructor to get value , we don't need course.courseInstructor
// console.log(courseInstructor);    //xyz        

const {courseInstructor:instructor}=course    //now we can rename the attribute
console.log(instructor);    //xyz

// JSON-JavaScript Object Notation

//JSON syntax

// {
//     "name":"ansuman",
//     "email":"ansuman@gmail.com",
//     "course":"JavaScript"
// }                                        //it looks like object but not object, it is a JSON format
                                            //In JSON format, key is also a string 

[
    {},
    {},
    {}
]        // it is also a JSON format
