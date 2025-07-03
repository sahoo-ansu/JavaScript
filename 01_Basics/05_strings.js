const name="Ansuman"
const repoCount=11

console.log(name+" "+repoCount+" value");

console.log(`Hello My name is ${name}. and my repo count is ${repoCount}`);


const gameName=new String('      FlashFTW      ')

console.log(gameName.__proto__);  // {}

console.log(gameName[0]);         //  (space)
console.log(gameName.length);

console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());

console.log(gameName.trim());
console.log(gameName.trimStart());

// 20
//       flashftw      
//       FLASHFTW      
// FlashFTW
// FlashFTW 


console.log(gameName.charAt(8));
console.log(gameName.charAt(22));  //nothing(blank output)

console.log(gameName.indexOf('F'));
console.log(gameName.lastIndexOf('F'));
console.log(gameName.indexOf('z'));

// a

// 6
// 11
// -1


const newStr=new String('Flash-FTW')


const subStr=newStr.substring(3,6)
console.log(subStr)     // sh-

const slc=newStr.slice(-5,-3)
console.log(slc)        // h-


console.log(newStr.replace('FTW',"OD"));    // Flash-OD
console.log(newStr.replace('ftw','od'));    // Flash-FTW

console.log(newStr.includes('ftw'));        // false
console.log(newStr.includes('FTW'));        // true

console.log(newStr.split('-'));             // [ 'Flash', 'FTW' ]















