// Question 1:
// **Q: Write a for loop that prints numbers from 1 to 5 in the console.**

/*let i;
for (let i = 1; i < 6; i++) {
    console.log(i);
}
*/

// Question 2:
// **Q: Using a while loop, print even numbers from 2 to 10 (inclusive) in the console.**

/*let i;
for (i=1; i<=10; i++) {
    if(i%2==0)
    console.log(i)  
}*/


// Question 3:
// **Q: Write a for loop to calculate the sum of numbers from 1 to 10.**
/*let totalSum = 0;
for (let i = 1; i <= 10; i++) {
    totalSum += i;
}
console.log("The sum of numbers from 1 to 10 is:", totalSum);
*/

// Question 4:
// **Q: Using a while loop, find the factorial of a given number (e.g., 5).**

/*function factorial(number) {
    let result = 1;
    let i = 1;
    while (i <= number) {
        result *= i;
        i++;
    }
    return result;
}

const number = 5;
console.log("The factorial of", number, "is:", factorial(number));


*/
// Question 5:
// **Q: Write a for loop that prints the square of numbers from 1 to 5.**
// for (let i = 1; i <= 5; i++) {
//     let square = i * i;
//     console.log("The square of", i, "is:", square);
// }


// Question 6:
// **Q: Using a while loop, print the cube of numbers from 1 to 5.**
// let i = 1;
// while (i <= 5) {
//     let cube = i ** 3;
//     console.log("The cube of", i, "is:", cube);
//     i++;
// }


// Question 7:
// // **Q: Write a for loop to iterate through an array of names and print each name in the console.**
// const names = ["Alice", "Bob", "Charlie", "David", "Emma"];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }


// Question 8:
// **Q: Using a while loop, find the sum of elements in an array of numbers.**
// const numbers = [3, 7, 11, 5, 2];
// let mul = 0;
// let i = 1;

// while (i <= numbers.length) {
//     mul *= numbers*numbers
//     i++;
// }

// console.log("The sum of elements in the array is:", mul);

/*
// Question 9:
// **Q: Write a for loop that prints the elements of an array in reverse order.**
const array = ["apple", "banana", "cherry", "date", "elderberry"];

for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}


// Question 10:
// **Q:const numbers = [10, 5, 7, 14, 8, 20, 3];
let largest = numbers[0]; // Assume the first element is the largest
let i = 1;

while (i < numbers.length) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    i++;
}

console.log("The largest number in the array is:", largest);

// Question 11:
// **Q: Write a for loop to calculate the sum of all even numbers from 1 to 20.**
let sum = 0;

for (let i = 2; i <= 20; i += 2) {
    sum += i;
}

console.log("The sum of all even numbers from 1 to 20 is:", sum);

// Question 12:
// **Q: Using a while loop, find the product of all odd numbers from 1 to 15.**
let product = 1;
let i = 1;

while (i <= 15) {
    if (i % 2 !== 0) {
        product *= i;
    }
    i++;
}

console.log("The product of all odd numbers from 1 to 15 is:", product);

// Question 13:
// **Q: Write a for loop to print the following pattern:**
// ```
// *
// **
// ***
// ****
// *****
// ```
for (let i = 1; i <= 5; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}


// Question 14:
// **Q: Using a while loop, print the numbers from 10 to 1 in descending order.**
let number = 10;

while (number >= 1) {
    console.log(number);
    number--;
}

// Question 15:
// **Q: Write a for loop to calculate the factorial of a given number (e.g., 6).**
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

const number = 6;
console.log("The factorial of", number, "is:", factorial(number));

// Question 16:
// **Q: Using a while loop, find the sum of digits of a given number (e.g., 123).**
function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10; // Add the last digit to sum
        number = Math.floor(number / 10); // Remove the last digit
    }
    return sum;
}

const number = 123;
console.log("The sum of digits of", number, "is:", sumOfDigits(number));


// Question 17:
// **Q: Write a for loop to print the following pattern:**
// ```
// 55555
// 4444
// 333
// 22
// 1
// ```
const pattern = `55555
4444
333
22
1`;

const lines = pattern.split('\n');

for (const line of lines) {
    console.log(line);
}


// Question 18:
// **Q: Using a while loop, print the first 10 Fibonacci numbers.**
let n = 10;
let firstNumber = 0;
let secondNumber = 1;
let count = 0;

console.log("The first 10 Fibonacci numbers are:");

while (count < n) {
    console.log(firstNumber);
    const nextNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = nextNumber;
    count++;
}


// Question 19:
// **Q: Write a for loop to find and print the prime numbers between 1 and 20.**
console.log("Prime numbers between 1 and 20 are:");

for (let i = 2; i <= 20; i++) {
    let isPrime = true;
    
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        console.log(i);
    }
}

// Question 20:
// **Q: Using a while loop, reverse a given number (e.g., 12345).**
function reverseNumber(number) {
    let reversedNumber = 0;
    while (number > 0) {
        const digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10);
    }
    return reversedNumber;
}

const number = 12345;
const reversed = reverseNumber(number);
console.log("The reverse of", number, "is:", reversed);

*/

// let n=5
for (let i=1; i<=5; i++){
    let str=' '
    for(let j=1; j<=i; j++){
        str += i
    }
    console.log(str)
}