"use strict";
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
let isBlack = false;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(23));
