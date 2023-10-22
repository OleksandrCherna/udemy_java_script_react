"use strict";

let hamburger = true;
let fries = true;

if (hamburger && fries) {
    console.log("Я сыт");
}

console.log(hamburger && fries);

hamburger = true;
fries = false;

if (hamburger && fries) {
    console.log("Я сыт");
}

console.log(hamburger && fries);

hamburger = 5;
fries = 0;

if (hamburger && fries) {
    console.log("Я сыт");
}

console.log(hamburger && fries);

//(null, 0, "", undefined, NaN,)  всегда false

hamburger = 2;
fries = 1;

if (hamburger === 3 && fries === 1) {
	console.log("Все сыты");
} else {
	console.log("Мы уходим!")
}

hamburger = 3;
fries = 1;
let cola = 0;

if (hamburger === 3 && cola === 1 && fries === 1) {
	console.log("Все сыты");
} else {
	console.log("Мы уходим!")
}

hamburger = 3;
fries = 1;
cola = 0;

console.log(hamburger === 3 && cola  && fries );

if (hamburger === 3 && cola === 1 && fries === 1) {
	console.log("Все сыты");
} else {
	console.log("Мы уходим!")
}

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && "gerhtrheth");

hamburger = 3;
fries = 0;
cola = 0;

if (hamburger || cola || fries) {
	console.log("Все довольны!");
} else {
	console.log("Мы уходим!")
}

hamburger = 0;
fries = null;
cola = 0;

if (hamburger || cola || fries) {
	console.log("Все довольны!");
} else {
	console.log("Мы уходим!")
}

console.log(hamburger || cola || fries );

let joinReport, alexReport, samReport, mariaReport = "done";

console.log(joinReport || alexReport || samReport || mariaReport);

hamburger = 3;
fries = 3;
cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
	console.log("Все довольны!");
} else {
	console.log("Мы уходим!");
}

console.log(hamburger === 3 & cola === 2 || fries === 3 && nuggets);

console.log(hamburger === 3 && (cola === 2 || fries === 3) && nuggets);

console.log(!0);

//Задачи:

console.log( NaN || 2 || undefined ); // 2


console.log( NaN && 2 && undefined ); // NaN


console.log( 1 && 2 && 3 ); //3


console.log( !1 && 2 || !3 ); //false


console.log( 25 || null && !3 ); // 25


console.log( NaN || null || !3 || undefined || 5); //5


console.log( NaN || null && !3 && undefined || 5); //5


console.log( 5 === 5 && 3 > 1 || 5); //true
