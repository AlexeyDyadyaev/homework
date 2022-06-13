/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;
let lastFilm;
let lastFilmReit;
let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start (){
    while (1) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?',);
        if (numberOfFilms === null || numberOfFilms === '' || numberOfFilms.length > 50) {
            alert('Заполните поле! Строка не должна превышать 50 символов');
            continue;
        }
        personalMovieDB.count = numberOfFilms;
        for (let i = 0; i < 2; i++){
            lastFilm = prompt('Один из последних просмотренных фильмов?','');
            if (lastFilm === null || lastFilm === '' || lastFilm.length > 50){
                i--;
                alert('Заполните поле! Строка не должна превышать 50 символов');
                continue;           
            }  while (1){
                lastFilmReit = prompt('На сколько оцените его?','');
                if (lastFilmReit === null || lastFilmReit === '' || lastFilmReit.length > 50){
                    alert('Заполните поле! Строка не должна превышать 50 символов');
                    continue;} else {
                    break;
                }            
            }
            personalMovieDB.movies[lastFilm] = lastFilmReit;
        }
        break;   
    }
    
}

start();

function detectViewReiting(){
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        alert("Вы классический зритель");
    }else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    }else {
        alert("Произошла ошибка");
    }
}

detectViewReiting();
 
function showMyDB() {
    if (personalMovieDB.privat === false){
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres (){
    for (let i = 0; i < 3; i++){
        let a = prompt(`Ваш любимый жанр под номером ${(i + 1)}`,);
        if (a === null || a ===''){
            alert('Введите Ваш любимый жанр');
            i--;
            continue;
        }
        personalMovieDB.genres[i] = a;
    }
}

 writeYourGenres (); 