let result = "";
const myLength = 5;

for (let i = 0; i <= myLength; i++) {
	for (let j = 0; j < myLength - i; j++) {    	
		result += "-";
	}
	for (let j = 0; j < i * 2 + 1; j++) {
		result += "*";    
	}
	result += "\n";
}

console.log(result);
