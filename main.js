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

numBtn.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		handleNumber(e.target.textContent);
	});
});

function handleNumber(num) {
	currNum += num;
	currOutput.textContent = currNum;
}

operationBtn.forEach((op) => {
	op.addEventListener('click', (e) => {
		handleOperator(e.target.textContent);
	});
});

function handleOperator(op) {
	currNum = currOutput.textContent;
	currNum = parseInt(currNum);
	operator = op;
	prevNum = currNum;
	currNum = '';
	prevOutput.textContent = prevNum + ' ' + op;
	currOutput.textContent = '';
}

function equals() {
	prevOutput.textContent = prevOutput.textContent + ' ' + currNum;
	// currNum = parseInt(currNum);
	// prevNum = parseInt(prevNum);
	currOutput.textContent = operate(operator, prevNum, currNum);
}

function del() {}
function clearFun() {
	currNum = '';
	prevNum = '';
	operator = '';
	currOutput.textContent = '0';
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
