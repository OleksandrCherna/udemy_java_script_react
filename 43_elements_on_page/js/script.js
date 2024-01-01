"use strict";
//обращение к элементу по ID
const box = document.getElementById("box");

console.log(box);
//обращение к элементу по "тегу", вызывает все элементы под "тегом" в виде массива даже если элемент один
const btns = document.getElementsByTagName("button");

console.log(btns);
//обращение к определенному элементу "тега" при создании переменной  
//const btns = document.getElementsByTagName("button")[1]; или при созданной переменной с данным "тегом": console.log(btns[1]); 

//обращение к элементу по классу
const circls = document.getElementsByClassName("circle");

console.log(circls);

// вызов  по селектору, обязательно точка перед селектором

const hearts = document.querySelectorAll(".heart");

hearts.forEach(item => {
	console.log(item);
});
//вызов первого попавшего элемента с данным селектором
const oneHeart = document.querySelector(".heart");

console.log(oneHeart);
