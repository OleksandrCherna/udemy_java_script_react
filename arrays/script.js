"use strict";

const arr = [1, 12, 6, 8, 4];
// сортировка чисел по возрастанию
arr.sort(compareNum);
console.log(arr);
//функция для сортировки чисел по порядку
function compareNum(a, b) {
    return a - b;
}


//удаление последнего элемента в массиве
arr.pop();
//добавление элемента в конец массива
arr.push(10);
//добавление элемента в начало массива
arr.shift(0);
//удаляет первый элемент массива
arr.unshift();
//перебор элементов массива циклом
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
//перебор массива с циклом for of 
for (let value of arr) {
	console.log(value);
}
//длина массива(кол-во элементов)
console.log(arr.length);
//метод for each(применяет функцию для каждого элемента и возвращает результат)
arr.forEach(function(item, i, arr) {
	console.log(`${i}: ${item} внутри массива ${arr}`);
});
//метод split формирует массив из строки
const str = prompt("", "");
const products = str.split(", ");
console.log(products);
//метод sort всегда сортирует элементы как строки
products.sort();
//метод join формирует строку з массива
console.log(products.join("; "));
