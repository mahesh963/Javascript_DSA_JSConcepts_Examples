//Imput : str = "subscribe to RoadsideCoder", maxlength=9
//Output:"subscribe..."

let str = "subscribe to RoadsideCoder";
let maxlength = 9;

function truncate(str, maxlength) {
	if (str.length > maxlength) {
		return str.slice(0, maxlength) + "...";
	} else {
		return str;
	}
}

console.log(truncate(str, maxlength));
