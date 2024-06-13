// 1. Write a function that takes two parameters and returns their sum.
// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }
// let sum = addTwoNumbers(5, 3);
// console.log(sum); 

// 2. Create a function that calculates the average of an array of numbers.
function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  let numbers = [1, 2, 3, 4, 5];
let average = calculateAverage(numbers);
console.log(average); 
// 3. Write a function that checks if a given number is even or odd.
function isEvenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log(isEvenOrOdd(20)); 


// 4. Create a function that reverses a string.
function reverseString(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// Example usage:
function reverseString(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


console.log(reverseString('hello')); 



// 5. Write a function that finds the maximum value in an array of numbers.
const arr = [1, 6, 3];
const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
console.log(`The maximum value is: ${max}`);


// 6. Create a function that converts Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}

const celsiusValue = 25; // Example Celsius value
const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
console.log(`The Fahrenheit equivalent of ${celsiusValue}°C is ${fahrenheitValue}°F.`);

// 7. Write a function that generates a random number between a given minimum and maximum.
// 8. Create a function that checks if a string is a palindrome.
// 9. Write a function that capitalizes the first letter of each word in a sentence.
// 10. Create a function that returns the factorial of a given number.
// 11. Write a function that counts the number of occurrences of a specific element in an array.
// 12. Create a function that checks if a given year is a leap year.
// 13. Write a function that merges two arrays and returns the sorted result.
// 14. Create a function that converts a number to its Roman numeral representation.
// 15. Write a function that finds the second smallest element in an array of numbers.
// 16. Create a function that calculates the area of a circle given its radius.
// 17. Write a function that truncates a string if it exceeds a specified length and appends "..." to the end.
// 18. Create a function that checks if a given string contains only digits.
// 19. Write a function that removes all falsy values (false, null, 0, "", undefined, and NaN) from an array.
// 20. Create a function that generates a new array with unique values from a given array.
