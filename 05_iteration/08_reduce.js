//reduce :- this method takes 2 parameter. one is function, 2nd is a accumilator initializor. further in function it takes 2 parameter one is accumilator and another is item

const myNums=[1,2,3]

// const total=myNums.reduce(function(acc,num){
//     console.log(`acc:${acc} num:${num} total:${acc+num}`)
//     return acc+num
// },0)

const total=myNums.reduce( (acc,num)=>acc+num  ,0)

console.log(total);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice=shoppingCart.reduce( (acc,item)=>acc+item.price  ,0 )
console.log(totalPrice);
