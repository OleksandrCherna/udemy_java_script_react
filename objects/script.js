"use strict";

// const obj = {}; используемый вариант создания обьектов
// const obj = new Object(); старый вариат создания обьектов

const options = {
	name: "test",
	width: 1024,
	heigth: 1024,
	colors: {
		border: "bllack",
		bg: "red"
	}
};

//получение значения по ключу
console.log(options.name); 

//удаление свойства из обьекта
//delete options.name; 

console.log(options);

//перебор ключей обьекта с их значением
for (let key in options) {
	console.log(`Свойство ${key} имеет значение ${options[key]}`);
}
