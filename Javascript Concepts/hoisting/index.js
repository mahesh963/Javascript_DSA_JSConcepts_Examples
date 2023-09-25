//=================== < Hoisting > ============================//
// Hoisting is javascript behaviour where functions and  variable declarations are moved to the top of the scope at the time of compilation phase

console.log(hoistFunc());

function hoistFunc() {
	let x = 10;
	return x;
}

//===============================================//

y = 16;

console.log("print y:", y);

var y;
//===============================================//
// declaration is hoisted but not assignment/initialization
//===============================================//

// b = 14;
// console.log("print b:", b); //Cannot access 'b' before initialization
// let b;

c = 10;
console.log("print c:", c); //Missing initializer in const declaration
const c;


//=================================var,let,const=============================================//

function check() {
	if (true) { //functional scope
		let num = 10;
		console.log("let ceates a blocked scope", num);
	}
	console.log("var:", num);
}

check();
