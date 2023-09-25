//<=================Print Table of user defined=========================>

function Table(num) {
	for (let i = 1; i <= 15; i++) {
		setTimeout(() => {
			console.log(`${num} * ${i} = ${num * i}`);
		}, 600 * i);
	}
}

Table(6);
