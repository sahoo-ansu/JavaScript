const marvel=['thor','ironman','spiderman']
const dc=['superman','flash','batman']

// marvel.push(dc)
// console.log(marvel);   //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const heros=marvel.concat(dc)
// console.log(heros);        //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const heros=[...marvel,...dc]    //prefer to use this rather than concat
console.log(heros);         // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const anotherArr=[1,2,[2,3,4,5],5,[3,4,5,[1,2,3,4]]]
const flatArr=anotherArr.flat(Infinity)
console.log(flatArr);       //[1, 2, 2, 3, 4, 5, 5, 3, 4, 5, 1, 2, 3, 4]

console.log(Array.isArray("Ansuman"))     // false
console.log(Array.from("Ansuman"));      //  [ 'A', 'n', 's', 'u', 'm', 'a',  'n']
console.log(Array.from({name:"Ansuman"})) // []     // js not able to know which one convert to array(key or value)

const score1=100;
const score2=200
const score3=300
console.log(Array.of(score1,score2,score3));   // [ 100, 200, 300 ]


  
 


 
  

  


