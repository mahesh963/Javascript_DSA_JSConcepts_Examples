//<=================Convert Celsius to fahrenheit/ fahrenheit to celsius=========================>

function temprature(num) {
	let CtoF = num * 1.8 + 32;
	let FtoC = (5 / 9) * (num - 32);

	console.log(CtoF, FtoC);
}

temprature(36);
