"use strict";

//1) преобразование в строку(очень редко используется)

console.log(typeof(String(null)));

console.log(typeof(String(4)));

// более часто используемый способ - конкатенация

console.log(typeof(5 + ""));

//интерполяция(более старый код)

const num = 5;

console.log("https://vk.com/catalog/" + num);

//более новый

const fontSize = 26 + "px";

// 2) преобразование в число

// очень редко используется

console.log(typeof(Number("4")));

// более используемый способ - унарный плюс

console.log(typeof(+"5"));

console.log(typeof(parseInt("15px", 10)));

//реальное применение

let answ = +prompt("Hello", "");

//3) булиновое значение

// всегда false

//0, "", null, undefined, NaN;

//пример изначально switcher это пустое значение

let switcher = null;

if(switcher) {
	console.log("Working...")
}
//например switcher изменился и тогда условие выполнится 

switcher = 1;

if(switcher) {
	console.log("Working...")
}

// еще способ изменения(очень редко используемый)

console.log(typeof(Boolean("4")));

// еще способ изменения(очень редко используемый)

console.log(typeof(!!"44444"));














