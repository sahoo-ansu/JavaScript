const score=400
console.log(score);       //400

const balance=new Number(100)
console.log(balance);      //[Number: 100]

console.log(balance.toFixed(2))   // 100.00

const anotherNum=20.87678
console.log(anotherNum.toPrecision(3));    // 20.9
console.log(anotherNum.toPrecision(2));     // 21
console.log(anotherNum.toPrecision(1));     // 2e+1


const hundreds=100000000
console.log(hundreds.toLocaleString());    // 100,000,000
console.log(hundreds.toLocaleString('en-IN'));   // 10,00,00,000


// constructor : Number()
// toExponential()
// toFixed()
// toLocaleString()
// toPrecision()
// toString()
// valueOf()



// +++++++++++++++++++++++++++Maths+++++++++++++++++++++++

console.log(Math);              // Object [Math] {}
console.log(Math.abs(-4));        // 4
console.log(Math.round(2.4));     // 2
console.log(Math.round(2.5));     // 3 
console.log(Math.ceil(2.2));      // 3
console.log(Math.floor(2.9));     // 2
console.log(Math.min(2,3,4,7,5));  // 2
console.log(Math.max(2,3,4,7,5));  // 7
console.log(Math.max([2,3,4,7,5])); // NaN

console.log(Math.random());     // 0.23526024697951353  (0<num<1)

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))    // 11   (10<num<=20)



