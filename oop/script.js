"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj)); //=> object

console.dir([1, 2, 3]);

const soldier = {
	health: 400,
	armor: 100,
	sayHello: function() {
		console.log("Hello!")
	}
};

// const john = {
// 	health:100
// };
//устаревший формат установки прототипа для обьекта !не используется!
// john.__proto__ = soldier;

//установка прототипа для обьекта
const john = Object.create(soldier);
console.log(john.armor); //=> 100
john.sayHello(); //=> Hello!
