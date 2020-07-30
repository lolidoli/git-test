"use strict";

function learnJS(lang, callbacks) {
    console.log(`Я учу: ${lang}`);
    callbacks();
}

function done() {
    console.log('Я прошел первый урок!');
}

learnJS('JavaScript', done);
