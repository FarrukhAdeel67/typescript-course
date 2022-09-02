"use strict";
let greet;
greet = (a, b, c = 12) => {
    console.log(a + b);
    console.log(c);
};
greet(1, 2);
//function signatures.
let logDetails;
logDetails = (ninga) => {
    console.log(`${ninga.name} is ${ninga.age} years old`);
};
