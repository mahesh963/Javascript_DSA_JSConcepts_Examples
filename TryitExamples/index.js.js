// //<==============================>

// let str = "welcome to javascript coding language";

// let reverseStr = str.split("").reverse().join("").split("").reverse().join("");
// console.log(reverseStr);

//let newArr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// let index = newArr.indexOf(30);

// let result = newArr.splice(3, 0, 40, 50);

//newArr.splice(index, no.of.elements, elements);

//newArr.slice(start,end)

// let result = newArr.splice(8, 1);

// console.log(result);
// console.log("newArr", newArr);

//let newArray = [
// 	6, 4, 3, 2, 1, 16, 9, 7, 1, 1, 1, 1, 3, 3, 3, 4, 5, 5, 6, 7, 7, 8, 8, 8, 88,
// 	9, 9, 9, 9, 6, 6, 6, 6,
// ];

//let newArray = [{ a: 1 }, { a: 3 }, { b: 6 }];
//Removing duplicates from an array
//==========Removing duplicates from an array===========
// let result = newArray.reduce((acc, ele) => {
// 	return acc.includes(ele) ? acc : [...acc, ele];
// }, []);

// console.log(result);

// let sortArry = newArray.sort((a, b) => b - a);

// console.log(sortArry);
//==========IIFE immediately invoked function expression===========
// console.log(Math.max(...newArray));
// console.log(Math.max.apply(null, newArray));

// let strVal = "countElementOccurrences";

// // console.log(strVal.replace("c", "X"));

// function replaceChar(strVal) {
// 	let newWord = "";
// 	for (let index = 0; index < strVal.length; index++) {
// 		let element = strVal[index];
// 		if (element === "c") {
// 			element = "X";
// 			newWord = newWord + element;
// 		} else {
// 			newWord = newWord + element;
// 		}
// 	}
// 	console.log(newWord);
// }

// replaceChar(strVal);

let newArrayObj = [{ a: 1 }, { a: 3 }, { b: 6 }, { a: 1 }, { a: 2 }];

// Use a temporary object to track unique objects based on their properties
// const uniqueObjectTracker = {};

// // Filter the array and only keep unique objects
// const uniqueArray = newArrayObj.filter((obj) => {
// 	const key = JSON.stringify(obj); // Convert the object to a JSON string for comparison
// 	if (!uniqueObjectTracker[key]) {
// 		uniqueObjectTracker[key] = true;
// 		return true;
// 	}
// 	return false;
// });

// console.log(uniqueArray);

// console.log(typeof Object.assign({}, []));

let obj = {
	name: "venky",
	age: 24,
	hobbies: ["cricket", "hockey"],
};

function callMeth() {
	console.log("onjjjjjj:", obj.name);
}

//let newObj = Object.assign({}, obj); //shallowcopy

// let newObj = JSON.parse(JSON.stringify(obj)); //deepcopy

// newObj.hobbies[1] = "volleyball";

// console.log(obj, newObj);

//================================

// let objMeth = {
// 	name: "venky",
// 	age: 24,
// 	hobbies: ["cricket", "hockey"],
// 	greet() {
// 		console.log("name:", this.name);
// 	},
// };

// function callMeth() {
// 	console.log(`hie this is ${objMeth.name}`);
// }

// callMeth.apply(objMeth);

// function abc(a, b, cb) {
// 	let z = a * b;
// 	console.log("z", z);
// 	cb();
// 	//return z;
// }

// function cb() {
// 	console.log(`this is cb function`);
// }

// abc(3, 4, cb);

// function isPrime(num) {
// 	if (num <= 1) {
// 		return false;
// 	}
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// console.log(isPrime(37));

// for (let j = 0; j < 15; j++) {
// 	if (isPrime(j)) {
// 		console.log(j);
// 	}
// }

// function fibonacciSeries(num) {
// 	let a = 0;
// 	let b = 1;
// 	for (let index = 0; index < num; index++) {
// 		let temp = a + b;
// 		b = a;
// 		a = temp;
// 		console.log(temp);
// 	}
// }

// fibonacciSeries(9);

// let resArr = ["a", "b", "c", "d", "e", "f", "g"];

// let newRseArr = JSON.parse(JSON.stringify(resArr));

// console.log(resArr, newRseArr.reverse());

// let replaceAt = 6;
// let replaceItem = "hello";
// console.log(
// 	...resArr.slice(0, replaceAt),
// 	replaceItem,
// 	...resArr.slice(replaceAt + 1)
// );
// resArr[replaceAt] = replaceItem;

//console.log(resArr);

// let resNewArr = ["a", "b", "c", "d", "e", "f", "g"];

// let removeArr = resNewArr.filter((item, i) => item !== "c");
// console.log("removeArr", removeArr);

// console.log(resNewArr.slice(1, 2, "k", 6));
// console.log(resNewArr);

// let insertELe = ["X", ...resNewArr];

// console.log(insertELe);

// console.log("popele", insertELe.splice(-1, 1), insertELe);
// console.log("popele", insertELe.slice(0, 1), insertELe);

// ArrayOfObject = [
// 	{
// 		Name: "shan",
// 		Mark: 78,
// 	},
// 	{
// 		Name: "raj",
// 		Mark: 65,
// 	},
// 	{
// 		Name: "shiva",
// 		Mark: 87,
// 	},
// ];

// let totalMarks = ArrayOfObject.reduce((acc, curr) => {
// 	return acc + curr.Mark;
// }, 0);

// console.log(totalMarks);

// let newStr = "hellojavascript";
// let newWord = "java";
// console.log(newWord.split("").reverse().sort().join(""));
// console.log(newStr.includes(newWord));

// function isArmstrongNumber(number) {
// 	let numStr = number.toString();
// 	let numLength = numStr.length;

// 	const sum = numStr
// 		.split("")
// 		.reduce((acc, digit) => acc + Math.pow(parseInt(digit), numLength), 0);

// 	//console.log("sum", sum);
// 	if (number === sum) {
// 		console.log("sum", number, sum);
// 		return sum;
// 	}

// 	return null;
// }

// //isArmstrongNumber(65);
// const armstrongNumbers = [];
// for (let index = 150; index <= 155; index++) {
// 	const result = isArmstrongNumber(index);
// 	if (result !== null) {
// 		armstrongNumbers.push(result);
// 	}
// }

// console.log(armstrongNumbers);

// function isAnagramMethod() {
// 	let str = "6676778888";
// 	let obj = {};
// 	for (let i = 0; i < str.length; i++) {
// 		obj[str[i]] = (obj[str[i]] || 0) + 1;
// 	}

// 	console.log("result", obj);
// }

// isAnagramMethod();

// function sumOfTwo(arr, target) {
// 	let resarr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[i] + arr[j] === target) {
// 				resarr.push(arr[i], arr[j]);
// 			}
// 		}
// 	}
// 	return resarr;
// }

// console.log(sumOfTwo([4, 3, 1, 6, 7], 9));

// obj1 = { a: 10 };
// let obj2 = obj1;
// obj2.a = 20;

// console.log(obj1);
// console.log(obj2);
// let obj1;

// console.log(null == undefined);
// console.log(null === undefined);

// const mul = (a) => (b) => (c) => a * b * c;

// console.log(mul(2)(3)(4));

// let arr = [
// 	6, 6, 6, 6, 66, 1, 2, 3, 9, 4, 4, 5, 5, 56, 6, 67, 7, 78, 8, 8, 7, 5, 4, 3, 2,
// 	2, 4, 5, 6,
// ];
// const vowels = ["a", "e", "i", "o", "u"];
// function occur() {
// 	let string = "javascript";
// 	let splitStr = string.split("");

// let result = splitStr.filter((item) => vowels.includes(item))
// console.log(result)

// 	let resArr = [];
// 	for (let i = 0; i < splitStr.length; i++) {
// 		let count = 0;
// 		for (let j = 0; j < vowels.length; j++) {
// 			if (splitStr[i] == vowels[j]) {
// 				count++;
// 			}
// 		}
// 		console.log(count);
// 		if (count > 0) {
// 			resArr.push(splitStr[i]);
// 		}
// 	}
// 	console.log(resArr);
// }

// occur();

const arr = [1, 23, 4, 56, 7];

var result = arr.reduce((acc, curr, i) => {
	return { ...acc, [i]: curr };
}, {});

console.log(result);

let newVal = { 0: 11, 1: 235, 2: 49, 3: 536, 4: 76 };

console.log(Object.values(newVal));
