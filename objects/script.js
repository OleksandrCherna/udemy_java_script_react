"use strict";

// const obj = {}; используемый вариант создания обьектов
// const obj = new Object(); старый вариат создания обьектов

const options = {
	name: "test",
	width: 1024,
	heigth: 1024,
	colors: {
		border: "black",
		bg: "red"
	},
	//создание метода внутри обьекта
	makeTest: function() {
		console.log("test")
	}
};

//получение значения по ключу
//console.log(options.name); 

//удаление свойства из обьекта
//delete options.name; 

//console.log(options);
//let counter = 0;
//перебор ключей обьекта с их значением
for (let key in options) {
	//перебор обьектов внутри обьекта
	if (typeof(options[key]) === "object") {
		for( let i in options[key])	{
			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
			//подсчет кол-ва свойств в обьекте !не совсем корректный метод!
			//counter++;	
		}			
	} else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`);
		//counter++;
	}	
}

//console.log(counter);
//метод для посчета количества ключей в обьекте
console.log(Object.keys(options).length);
//вызов метода внутри обекта
options.makeTest();

//деструктуризация обьекта

const {border, bg} = options.colors;
console.log(border);
