'use strict';

let num = 10;

function showFirstMessage(text) {
    console.log(text);
    //функция может перезаписывать переменные из самой функции
    num = 20;
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a,b) {
    return (a + b);
}

console.log(calc(10, 12));


//return возвращает результат на ружу
//такой вид функции имеет тип - function decloration
function ret() {
    let num = 50;
    return (num);
}

let anoterNum = ret();
console.log(anoterNum);

//вид function expression, после функции идет ;
const logger = function() {
 console.log("hello");
};

logger();

//стрелочная функция (полный вид записи)
const calcu = (a,b) => {
    console.log("1");
    return (a + b);
};

calcu(1,2);
//сокращенный вид если один аргумент и одна строка выполнения
const calcu1 = a => console.log(a);

calcu1('Hello');

//если 2 аргумента
const calcu2 = (a,b) => a + b;

console.log(calcu2(3,2));