"use strict";
//глобальное лексическое окружение
// let number = 5; debugger
//внутреннее лексическое окружение(технический обьект)
// function logNumber() {
// 	let number = 4; debugger
// 	console.log(number);
// }

// number = 6;

// logNumber();debugger

// number = 8;

// logNumber();debugger

function createCounter() {
	let counter = 0;

	const myfunction = function() {debugger
		counter = counter + 1;debugger
		return counter;debugger
	}

	return myfunction;
}
debugger
const increment = createCounter();
const c1 = increment();debugger
const c2 = increment();debugger
const c3 = increment();debugger

console.log(c1, c2, c3);
