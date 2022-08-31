var farrukh = {
    name: 'adeel',
    city: 'peshawar',
    age: 30
};
farrukh.name = 'gulwali';
farrukh.age = 40;
//explicit types....
//............
var character;
var age;
var check;
age = 3;
check = false;
character = 'f';
//arrayss....
var arr = [];
arr.push('farrukh adeel raziq');
console.log(arr);
//arr =['strings','characters'];
//union types is used for mixed arrays...
//.....
var mixedarr = [];
mixedarr.push("farrukhadeel");
mixedarr.push(123);
console.log(mixedarr);
var id;
id = 'id1';
id = 1;
//objects 
var objectone;
objectone = {
    name: 'farrukh',
    age: ''
};
objectone = []; //valid because array is a kind of object.
var objectTwo;
objectTwo = {
    name: 'salar',
    age: 1.5,
    check: true
};
//any type in typesrcipt
var ages;
ages = 23;
ages = true;
var miexed = [];
miexed.push(1, 'frk', true);
console.log(miexed);
