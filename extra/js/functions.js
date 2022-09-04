"use strict";
let greet;
greet = (a, b, c = 12) => {
    console.log(a + b);
    console.log(c);
    console.log("hello");
};
greet(1, 2);
let logDetails;
logDetails = (ninga) => {
    ninga.name = 'farrukh';
    ninga.age = 12;
    console.log(`${ninga.name} is ${ninga.age} years old`);
};
