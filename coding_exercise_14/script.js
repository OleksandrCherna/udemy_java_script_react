// *) Продвинутая задача на работу с объектами и массивами
// В этой задаче мы уже усложним работу с объектами и массивами. 
// Она необязательна и тут можно попробовать свои силы.

// Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. 
// Поэтому нужно четко следовать инструкции.

// Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.



// Задача:

// У вас есть список учеников, которые хотят поиграть в игру:

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 
// 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. 
// Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту. 
// Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. 
//  группы должны быть массивами. 
//   итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

// Задача интересная, немного заковыристая, 
// но все необходимое для неё мы уже проходили. 
// Просто распишите логику действий строка за строкой.


const students = ["Peter", "Andrew", "Ann", "Mark", "Josh", "Sandra", "Cris", "Bernard", "Takesi", "Sam"];

function sortStudentsByGroups(arr) {
	//сортировка имен по алфавиту
	arr.sort();
	console.log(arr);
	//создать три команды по три человека в трех разных массивах
	let a = [];
	let b = [];
	let c = [];
	let other = [];
	arr.forEach((item, i) => {
		if (i >= 0 && i <= 2) { a.push(item); }
		if (i >= 3 && i <= 5) { b.push(item); }
		if (i >= 6 && i <= 8) { c.push(item); }
		if (i > 8) { other.push(item); }	
		
	});
	//не попавшие в команду выводятся строкой "Оставшиеся студенты: -"	
	return [a, b, c, `Оставшиеся студенты: ${other.length > 0 ? other.join(", ") : "-"}`];  
}

console.log(sortStudentsByGroups(students));
console.log(1 < 2 || 1 > 2);
console.log(1 < 2 && 1 > 2);
console.log(1 < 2 && 1 < 2 );
