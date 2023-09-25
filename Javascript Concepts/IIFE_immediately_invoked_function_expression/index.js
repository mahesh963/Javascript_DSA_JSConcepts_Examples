//==========IIFE immediately invoked function expression===========
var username = "venky";
(function () {
	username = "mahi";
	console.log("hie");
})();

console.log(username);

var userNam = "Mahi";
function a() {
	userNam = "sstar";
}
a();
console.log(userNam);
