"use strict";

const box = document.getElementById("box"),
	btns = document.getElementsByTagName("button"),
	circles = document.getElementsByClassName("circle"),
	hearts = document.querySelectorAll(".heart"),
	oneHeart = document.querySelector(".heart"),
    wrapper = document.querySelector(".wrapper");
//console.dir(box);

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

box.style.cssText = "background-color: blue; width: 500px";

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

//  for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "blue";
//  }

hearts.forEach(item => {
	item.style.backgroundColor = "blue";
});

const div = document.createElement("div");
// const text = document.createTextNode("Тут был я");

div.classList.add("black");

document.body.append(div);

wrapper.append(div);

// wrapper.prepend(div);

// hearts[0].before(div);

// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

//устаревшие команды 

// wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);
// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);
//работа напрямую с HTML
//работа с структурами, можем использовать структуры HTML для работы с ними
div.innerHTML = "<h1>Hello World</h1>";
//работа только с текстом, можем добавлять только текст
//div.textContent = "Hello";

div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");
