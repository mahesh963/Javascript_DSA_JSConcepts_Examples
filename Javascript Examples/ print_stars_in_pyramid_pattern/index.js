//<=================Print stars(*)=========================>

for (let i = 1; i <= 6; i++) {
	// Print spaces before the stars
	for (let j = 1; j <= 6 - i; j++) {
		console.log("&nbsp;&nbsp;");
	}

	// Print stars
	for (let k = 1; k <= i * 2 - 1; k++) {
		console.log("* ");
	}

	// Move to the next line
	console.log("<br>");
}
