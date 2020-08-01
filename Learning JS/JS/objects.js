'use strict';

const options = {
    name: 'test',
    height: 1024,
    width: 1024,
    color: {
        border: 'black',
        backgroud: 'red'
    }
};

console.log(options['color']['border']);
console.log(options.color.border);

// console.log(options.name);
// delete options.name;
// console.log(options);

//Для перебора можно использовать метод for in и для вложенного объекта вот такую конструкцию

for (let key in options) {
    if (typeof(options[key]) === 'object') {
     for (let i in options[key]) {
         console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
     }
    } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}



