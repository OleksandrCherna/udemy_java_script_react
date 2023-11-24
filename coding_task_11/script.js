"use strict";

// Задачи на работу с массивами
// В этих заданиях мы с вами потренируемся работать с массивами.

// Учтите, что проверка кода в таких заданиях осуществляется автоматически, 
// через программу. Поэтому нужно четко следовать инструкции.

// Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

// Все данные для решения задач мы с вами рассмотрели в предыдущих обязательных уроках. 
// Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.

// Задачи:

// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк 
// и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. 
// Если массив пустой, то выводится сообщение 'Семья пуста'

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и 
// будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin

const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
		
	if (arr.length == 0) {
		return "Семья пуста";
	}  else {		
		let fam = arr.join(" ");
		return `Семья состоит из: ${fam}`;
	}        
}
console.log(showFamily(family));

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {    
	return arr.forEach(city => console.log(city.toLowerCase())); 
}

standardizeStrings(favoriteCities);