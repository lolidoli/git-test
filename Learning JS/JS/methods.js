"use strict";


//Методы строки
const str = "test";

console.log(str.toUpperCase());

//indexOf() - показывает номе буквы или слова в строке
const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));

//slice() - вырезает кусочек строки, можно задать от и до, если указать от то обрежет до конца
const logg = 'Hello World';
console.log(logg.slice(6, 11));
console.log(logg);

//substring(6, 11) - тоже самое что и slice(), не поддерживает отрицательные значения
//subst() - второе значение метода указывает колличество символов от начала первого
console.log(logg.substr(6, 5));

//Методы Numbers
const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));