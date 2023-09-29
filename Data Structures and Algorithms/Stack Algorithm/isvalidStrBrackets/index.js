//Determine if the input string is valid.
//open brackets must be closed by the same type of brackets.
//open brackets must be closed in the correct order.
//Every close bracket has a corresponding open bracket of the same type.

//Input:"()"
//Input:"([]{})"
//Input:"(]"

function isStrValid(str) {
	let stack = [];
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (char === "(" || char === "[" || char === "{") {
			stack.push(char);
		} else if (char === ")" || char === "]" || char === "}") {
			if (isEmpty(stack)) {
				return false;
			}

			const top = stack.pop();
			if (
				(char === ")" && top !== "(") ||
				(char === "]" && top !== "[") ||
				(char === "}" && top !== "{")
			) {
				return false;
			}
		}
	}
	return isEmpty(stack);
}

function isEmpty(stack) {
	return stack.length === 0;
}

console.log(isStrValid("([]{}}])"));
console.log(isStrValid("([]{})"));
