//for of

//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]

for (const i of arr) {
    //console.log(i);         //print all the elements line by line
}


for (const i of "Hello world!") {
    //console.log(i);         //print all the elements line by line including space,exclamatory
}

//map

const map=new Map()                  //in map there is (key,value) pair, there is always a unique key no duplicates allowed.

map.set('key1','value1')
map.set('key2','value2')
map.set('key3','value3')
map.set('key1','value1')       //    duplicate (key,value) pair, so there is 3 pair in map.     

// console.log(map);         //Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }

for(const key of map){
    // console.log(key);
}
/*
[ 'key1', 'value1' ]
[ 'key2', 'value2' ]
[ 'key3', 'value3' ]
*/


for(const [key,value] of map){
    // console.log(key,' :- ',value);
}
/*
key1  :-  value1
key2  :-  value2
key3  :-  value3
*/

const myObj={
    game1:'NFS',
    game2:'spiderman'
}

for(const [key,value] of myObj){
    // console.log(key,' :- ',value);     //error(myObj is not iterable)    
}