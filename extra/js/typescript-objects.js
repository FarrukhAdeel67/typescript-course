"use strict";
let farrukh = {
    name: 'adeel',
    city: 'peshawar',
    age: 30
};
farrukh.name = 'gulwali';
farrukh.age = 40;
//explicit types....
//............
let character;
let age;
let check;
age = 3;
check = false;
//arrayss....
let arr = [];
arr.push('farrukh adeel raziq');
console.log(arr);
//arr =['strings','characters'];
//union types is used for mixed arrays...
//.....
let mixedarr = [];
mixedarr.push("farrukhadeel");
mixedarr.push(123);
console.log(mixedarr);
let id;
id = 'id1';
id = 1;
//objects 
let objectone;
objectone = {
    name: 'farrukh',
    age: ''
};
objectone = []; //valid because array is a kind of object.
let objectTwo;
objectTwo = {
    name: 'salar',
    age: 1.5,
    check: true,
};
//any type in typesrcipt
let ages;
ages = 23;
ages = true;
let miexed = [];
miexed.push(1, 'frk', true);
console.log(miexed);
