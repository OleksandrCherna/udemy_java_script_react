/* Задание на урок:
1) Автоматизировать вопросы пользователей про фильм при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это просходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как str.length - и получить ее длину.)

3) При помощи условий проверить personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов" , если от 10 до 30 - "Вы классический зритель" , а если больше 30 "Вы киноман". А если не подошло ни к одному из вариантов - "Произошла ошибка".

4)Потренироваться и переписать цикл еще двумя способами.*/

`use strict`;

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?" , "");


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: {},
	privat: false
};



for (let i = 0; i < 2; i++) {
	const a = prompt("Один из последних просмотренных фильмов?", "");
	const b = prompt("На сколько оцените его?", "");

	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log("done"); 
	} else {
		console.log("error");
		i--;
	}
	
}

if (personalMovieDB.count < 10) {
	console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("Вы классический зритель");
} else if ( personalMovieDB.count > 30) {
	console.log("Вы киноман");
} else {
	console.log("Произошла ошибка");
}
console.log(personalMovieDB);