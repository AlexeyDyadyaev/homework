/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания



let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
                while (1) {
                    personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?',);
                    if (personalMovieDB.count === null || personalMovieDB.count === '' || 
                    personalMovieDB.count.length > 50) {
                        alert('Заполните поле! Строка не должна превышать 50 символов');
                        continue;
                    }
                    let lastFilm;
                    let lastFilmReit;
                    for (let i = 0; i < 2; i++){
                        lastFilm = prompt('Один из последних просмотренных фильмов?','').trim();
                        if (lastFilm === null || lastFilm === '' || lastFilm.length > 50){
                            i--;
                            alert('Заполните поле! Строка не должна превышать 50 символов');
                            continue;           
                        }  while (1){
                            lastFilmReit = prompt('На сколько оцените его?','').trim();
                            if (lastFilmReit === null || lastFilmReit === '' || lastFilmReit.length > 50){
                                alert('Заполните поле! Строка не должна превышать 50 символов').trim();
                                continue;} else {
                                break;
                            }            
                        }
                        personalMovieDB.movies[lastFilm] = lastFilmReit;
                    }
                    break;   
                }               
            },
    detectViewReiting: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
            alert("Вы классический зритель");
        }else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        }else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat === false){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++){
            let a = prompt(`Ваш любимый жанр под номером ${(i + 1)}`,);
            if (a === null || a ===''){
                alert('Введите Ваш любимый жанр');
                i--;
                continue;
            }
            personalMovieDB.genres[i] = a;
        }
        personalMovieDB.genres.forEach( (item,i) =>{
            console.log(`Любимый жанр # ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    }
};

//personalMovieDB.start ();
//personalMovieDB.detectViewReiting();
//personalMovieDB.writeYourGenres (); 

//personalMovieDB.toggleVisibleMyDB();
//personalMovieDB.showMyDB();
