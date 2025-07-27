//for in

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const i in myObject){
    // console.log(i);         //print all keys line by line 
    // console.log(myObject[i]);    //print all values line by line 
}

const mrArr=[1,2,3,4,5]

for(const i in mrArr){
    // console.log(i);         //print all index line by line 
    // console.log(mrArr[i]);    //print all values line by line 
}

const map=new Map()                  //in map there is (key,value) pair, there is always a unique key no duplicates allowed.

map.set('key1','value1')
map.set('key2','value2')
map.set('key3','value3')
map.set('key1','value1') 

for(const i in map){
    console.log(i)       //no output  //we can't do iteration on map like this
}