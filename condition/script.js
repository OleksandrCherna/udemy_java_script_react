"use strict";

if (1) {
	console.log("ok");
} else {
	console.log("Error");
}

const num = "50";
if (num < 49) {
	console.log("Error");
} else if (num > 100) {
	console.log("Много");
} else {
	console.log("ok");
}

(num === 50) ? console.log("ok") : console.log("Error");
switch (num) {
case "47":
	console.log("неверно");
	break;
case "100":
	console.log("неверно");
	break;
case "50":
	console.log("верно");
	break;
default:
	console.log("не в этот раз");
	break;
}
