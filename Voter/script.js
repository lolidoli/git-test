"use strict";

let results = 0;
let phangan = 0;
let samui = 0;

let total = 0;

for (let i=0; i < 4; i++) {
    const a = +prompt('Самуи или панган? 1 - Самуи / 2 - Панган');
    if (a == 1) {
        samui++;
    } if (a == 2) {
        phangan++;
    }
} 


console.log("Голосов за Самуи " + samui);
console.log("Голосов за Панган " + phangan);