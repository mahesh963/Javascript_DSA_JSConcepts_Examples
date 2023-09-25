//<---------callbaclk function / Higher Order function----------->

function display(a, b, operation) {
	var result = operation(a, b);
	console.log(result);
	return result;
}

function sum(a, b) {
	return a + b;
}

display(3, 6, sum);
