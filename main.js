let currNum = '';
let prevNum = '';
let operator = '';
let res = '';

const numBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operation]');
const clearBtn = document.querySelector('[clearBtn]');
const equalsBtn = document.querySelector('[data-equals]');
const currOutput = document.querySelector('.currOutput');
const prevOutput = document.querySelector('.prevOutput');
const decimal = document.querySelector('[data-decimal]');

window.addEventListener('keydown', handleKeyboard);

numBtn.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		handleNumber(e.target.textContent);
	});
});

function addDecimal() {
	if (currOutput.textContent.includes('.')) return;
	currNum += '.';
	currOutput.textContent = currNum;
}

function handleNumber(num) {
	if (currNum.length > 10) return;
	currNum += num;
	currOutput.textContent = currNum;
}

operationBtn.forEach((op) => {
	op.addEventListener('click', (e) => {
		handleOperator(e.target.textContent);
	});
});

function handleOperator(op) {
	if (operator != '') equals();
	operator = op;
	prevNum = currNum;
	currNum = '';

	prevOutput.textContent = prevNum + ' ' + op;
	currOutput.textContent = '';
}

function handleKeyboard(e) {
	if (e.key >= 0 && e.key <= 9) {
		handleNumber(e.key);
	} else if (e.key === '.') addDecimal();
	else if (e.key === '=') equals();
	else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
		convertOperator(e.key);
	else if (e.key === 'Backspace') del();
	else if (e.key === 'Escape') clearFun();
}
function convertOperator(op) {
	if (op === '+') return handleOperator('+');
	if (op === '-') return handleOperator('-');
	if (op === '*') return handleOperator('x');
	if (op === '/') return handleOperator('÷');
}

function equals() {
	// let lastChar = prevOutput.textContent.toString().slice(-1);
	// if (
	// 	lastChar === '+' ||
	// 	lastChar === '-' ||
	// 	lastChar === 'x' ||
	// 	lastChar === '÷'
	// ) {
	// 	prevOutput.textContent = prevOutput.textContent
	// 		.toString()
	// 		.slice(0, -1)
	// 		.concat(' ' + operator);
	// }
	if (operator === '÷' && currNum === '0')
		return alert('You cannot divide by zero');
	prevOutput.textContent = prevOutput.textContent + ' ' + currNum;
	currOutput.textContent = operate(operator, prevNum, currNum);
	currNum = currOutput.textContent;
	operator = '';
}

function del() {
	currOutput.textContent = currOutput.textContent.toString().slice(0, -1);
	currNum = currOutput.textContent;
}
function clearFun() {
	currNum = '';
	prevNum = '';
	operator = '';
	currOutput.textContent = '';
	prevOutput.textContent = '';
}
function add(a, b) {
	res = parseInt(a) + parseInt(b);
	return res;
}

function subtract(a, b) {
	res = a - b;
	return res;
}

function multiply(a, b) {
	res = a * b;
	return res;
}

function divide(a, b) {
	res = a / b;
	return res;
}

function operate(op, a, b) {
	switch (op) {
		case '+':
			return add(a, b);

		case '-':
			return subtract(a, b);

		case 'x':
			return multiply(a, b);

		case '÷':
			return divide(a, b);

		default:
			'Enter a valid operator';
	}
}
