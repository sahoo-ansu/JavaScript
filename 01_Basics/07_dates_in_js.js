// Dates

let myDate=new Date()
console.log(myDate);   //2025-07-03T12:44:26.372Z
console.log(myDate.toString());    // Thu Jul 03 2025 12:46:31 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());   // Thu Jul 03 2025
console.log(myDate.toLocaleString());  // 7/3/2025, 12:46:31 PM
console.log(typeof myDate);        // object

// let myCreatedDate=new Date(2025,6,1)    // 7/1/2025, 12:00:00 AM
// let myCreatedDate=new Date(2025,6,1,12,15)   // 7/1/2025, 12:15:00 PM
// let myCreatedDate=new Date("14-06-2025")       // 14/6/2025, 12:00:00 AM
let myCreatedDate=new Date("2025-6-14")          // 6/14/2025, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString())       

let MyTimeStamp=Date.now()
console.log(MyTimeStamp);   // 1751548191467
console.log(myCreatedDate.getTime());   //1749859200000
console.log(Math.floor(Date.now()/1000));   //1751548328







