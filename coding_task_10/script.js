"use strict";

// Задачи на работу с объектами
// В этих заданиях мы с вами потренируемся работать с объектами. 
// Это важный навык и нам нужно понимать как работают эти структуры.

// Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. 
// Поэтому нужно четко следовать инструкции.

// Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

// Все данные для решения задач мы с вами рассмотрели в предыдущих обязательных уроках. 
// Каждая задача проверяется отдельно, но по порядку, 
// так что вы будете получать разные уведомления при проверке.

// У вас есть готовый объект с данными. Разработчик Х хочет написать часть функционала, 
// но ему не хватает навыков. Выполните часть заданий за него.

// Задачи:

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и 
// возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, но не обязательно

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект 
// со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков. 
// Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. 
// При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, 
// а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, 
// то и сообщение тоже изменится.


const personalPlanPeter = {
	name: "Peter",
	age: "30",
	skills: {
		languages: ["ru", "ua"],
		programmingLangs: {
			js: "20%",
			php: "10%"
		},
		exp: "1 month"
	},
	showAgeAndLangs: function() {		
		const {languages} = this.skills;
		let str = `Мне ${this.age} и я владею языками: ${languages.map(item => item.toUpperCase()).join(" ")}`;
		return str;		
	}
    
};

function showExperience(plan) {
	const {exp} = plan.skills;
	return exp;  
}

function showProgrammingLangs(plan) {
	let str = "";
	const {programmingLangs} = plan.skills;
	for (let key in programmingLangs) {
		str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
	}
	return str;
}

console.log(showExperience(personalPlanPeter));
console.log(showProgrammingLangs(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs());
