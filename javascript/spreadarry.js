// const array1 = [1,2,3 ];
// const array2 = [4, 5, 6];
// const combinedArray = [...array1, ...array2];
// console.log(combinedArray); 


// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const mergedObj = { ...obj1, ...obj2 };   //why the dot line here
// console.log(mergedObj); 


// const arr = [1, 2, 3]
// // const newArr = [4,5,6,arr[0],arr[1],arr[2]]
// const newArr = [4,5,6,...arr]
// console.log(newArr)

//rest 
const arr = [1,2,3,4,5,6,7]
// const first = arr[0]
// const rest = arr.slice(3)

// console.log(frist)
// console.log(rest)

const [a,b, ...rest]=arr
console.log(a)
console.log(b)
console.log(rest)

// es6 rest parameter
function fun(...input) {
	let sum = 0;
	for (let i of input) {
		sum += i;
	}
	return sum;
}
console.log(fun(1, 2)); //3
console.log(fun(1, 2, 3)); //6
console.log(fun(1, 2, 3, 4, 5)); //15				 


// rest with function and other arguments
function fun(a, b, ...c) {
	console.log(`${a} ${b}`); //Mukul Latiyan
	console.log(c); //[ 'Lionel', 'Messi', 'Barcelona' ]
	console.log(c[0]); //Lionel
	console.log(c.length); //3
	console.log(c.indexOf('Lionel'));
    
}
fun('Mukul', 'Latiyan', 'Lionel', 'Messi', 'Barcelona');

function fun(...numbers) {
	let sum = 0;
	for (let i of numbers) {
		sum += i;
	}
	return sum;
}
console.log(fun(1, 2, 3, 4));


