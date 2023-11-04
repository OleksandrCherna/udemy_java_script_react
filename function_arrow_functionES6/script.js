"use strict";

function showFirstMessage(text) {
	console.log(text);
}

showFirstMessage("Hello world!");

function calc(a, b) {
	return (a + b);
}

console.log(calc(3, 5));
console.log(calc(3, 4));
console.log(calc(25, 5));

function ret() {
	let num = 50;
	// здесь может быть какой либо код 
	//производящий действия с переменной num
	//return возвращает результат работы кода с переменной
	return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
	console.log("Hello!");
};

logger();

const calc = (a, b) => {console.log(a + b)};
calc(1, 2);