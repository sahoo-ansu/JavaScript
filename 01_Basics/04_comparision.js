// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);  //true
// console.log("02">1);  //true
// console.log("02"<1);  //false
// console.log("2"==2);  //true


// console.log(null > 0)
// console.log(null >= 0)     //these type of conversion create confusion
// console.log(null == 0)
// console.log(null < 0)
// console.log(null <= 0)

// false
// true
// false
// false
// true

/*
The reason is that an equality check == and comparisions <,<=,>,>= work differently
Comparision converts null to a number ,treating as 0.

Thats why  null >= 0 , null <= 0 is true and null > 0 , null < 0 , null == 0 is false.
*/

// console.log(undefined > 0)
// console.log(undefined >= 0)
// console.log(undefined == 0)          //this type of conversion create confusion
// console.log(undefined < 0)
// console.log(undefined <= 0)

// false
// false
// false
// false
// false

//strict check(===)

console.log("2"===2);  //false

