//<=================Convert Any letter of Paragraph to UpperCase=========================>
function convParagraph(str) {
	let newArr = str.split(" ");
	console.log(newArr);
	let result = newArr.map((item, i) => {
		console.log(newArr.length - 1);
		if (i == newArr.length - 1) {
			return item.charAt(0).toUpperCase() + item.slice(1);
		} else {
			return item;
		}
	});
	console.log("result:::::", result.join(" "));
}

convParagraph("javascript is the best scripting language");
