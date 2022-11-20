const btn = document.querySelectorAll('.btn');
const currentOperation = document.querySelector('.currentOperation');
const previousOperation = document.querySelector('.previousOperation');

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(op, a, b) {
	switch (op) {
		case '+':
			add(a, b);
			break;
		case '-':
			subtract(a, b);
			break;
		case '*':
			multiply(a, b);
			break;
		case '/':
			divide(a, b);
			break;
		case 'pow':
			pow(a, b);
			break;
		default:
			'Enter a valid operator';
	}
}
