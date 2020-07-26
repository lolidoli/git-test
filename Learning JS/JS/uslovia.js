"use strict";

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log("error");
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

const newNum = (num == 50) ? console.log('ok') : console.log('не принято');

const numo = 50;

switch (numo) {
    case 49:
        console.log('wrong)');
        break;
    case 51:
        console.log('also worng');
        break;
    default:
        console.log('the right answer was 50');
        break;
}