/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ""); //+ делает числовой тип данных
    //isNaN - проверяет на числовой тип данных
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const a = prompt(`Ваш любимый жанр под номером ${i}`);
        if (a != null && a != '' && a.length > 3) {
            personalMovieDB.genres[i - 1] = a;
        } else {
            i--;
        }
    }
}

writeYourGenres();

function remeberMyFilms() {
    for (let i = 1; i < 3; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", "");
        const b = prompt("На сколько оцените его?", "");
        if (a != null && b != null && a != '' && b != '' && a.length >= 5) {
            personalMovieDB.movies[a] = b;
            //мы проверяем != null для того, чтобы проверить не нажал-ли пользователь на кнопку отмена
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// remeberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);