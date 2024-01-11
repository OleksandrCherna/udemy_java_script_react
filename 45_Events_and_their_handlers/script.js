"use strict";

const btn = document.querySelector("button"),
	overlay = document.querySelector(".overlay");

// btn.onclick = function() {
// 	alert("Click");
// };

// btn.onclick = function() {
// 	alert("Second Click");
// };
//добавление событий
// btn.addEventListener("click", () => {
// 	alert("Click");
// });

// btn.addEventListener("click", () => {
// 	alert("Second Click");
// });

// btn.addEventListener("mouseenter", (e) => {
// 	//console.log("Hover");
//     console.log(e.target);
//     e.target.remove();
// });
// let i = 0;
const deleteElement = (e) => {
	console.log(e.currentTarget);
	console.log(e.type);
	// i++;
	// if (i == 1) {
	// 	btn.removeEventListener('click', deleteElement);
	// }
};

btn.addEventListener("click", deleteElement);
overlay.addEventListener("click", deleteElement);

//отмена действий и событий

const link = document.querySelector("a");

link.addEventListener("click", function(event) {
	event.preventDefault();

	console.log(event.target);
});
