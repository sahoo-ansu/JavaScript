//for each       //

const coding = ["JavaScript","java","python","cpp"]

// coding.forEach( function(item){
//     console.log(item);              //print all the elements
// } )

// coding.forEach( (item)=>{
//     console.log(item);
// } )

// function printme(item,idx){
//     console.log(item,idx)
// }

// coding.forEach(printme)

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
// } )

const myCoding=[
    {
        language:"javascript",
        file:"js"
    },
    {
        language:"java",
        file:"java"
    },
    {
        language:"python",
        file:"py"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.language);
} )
