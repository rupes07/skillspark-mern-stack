// 1.	Write a JavaScript function add that takes two numbers as arguments and returns their sum. Provide an example of calling this function with two numbers.
function add(a, b) {
    return a + b;
}


const num1 = 5;
const num2 = 3;
const result = add(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${result}.`);

// 2.	Write a JavaScript function getFirstElement that takes an array as an argument and returns the first element of the array. Provide an example with an array of your choice.
function getFirstElement(arr) {
    if (arr.length > 0) {
        return arr[0];
    } else {
        return undefined; // Return undefined if the array is empty
    }
}

// Example usage:
const myArray = ['apple', 'banana', 'cherry', 'date'];
const firstElement = getFirstElement(myArray);
console.log(`The first element of the array is: ${firstElement}`);

// 3.	Define a JavaScript object person with properties name, age, and city. Write a function getPersonInfo that takes this object and returns a string with the person's details in the format "Name: [name], Age: [age], City: [city]".
// Define the person object
const person = {
    name: "John Doe",
    age: 30,
    city: "Seattle"
};

function getPersonInfo(personObj) {
    return `Name: ${personObj.name}, Age: ${personObj.age}, City: ${personObj.city}`;
}

const personDetails = getPersonInfo(person);
console.log(personDetails); 
// 4.	Write a JavaScript function toUpperCase that takes a string as an argument and returns the string in all uppercase letters. Provide an example with a sample string.
function toUpperCase(str) {
    return str.toUpperCase();
}

const originalString = "Hello, World!";
const uppercaseString = toUpperCase(originalString);
console.log(`Original: ${originalString}`);
console.log(`Uppercase: ${uppercaseString}`);

// 5.	Write a JavaScript function multiply that takes two numbers as arguments and returns their product. Provide an example of calling this function with two numbers.function multiply(a, b) {
    function multiply(a, b) {
        return a * b;
    }
    
   
    const num3 = 5;
    const num4 = 3;
    const product = multiply(num1, num2);
    console.log(`The product of ${num1} and ${num2} is ${product}.`);
    
// 6.	Write a JavaScript function getLastElement that takes an array as an argument and returns the last element of the array. Provide an example with an array of your choice.
// 7.	Define a JavaScript object book with properties title, author, and year. Write a function getBookTitle that takes this object and returns the title of the book.
// 8.	Write a JavaScript function reverseString that takes a string as an argument and returns the string reversed. Provide an example with a sample string.
// 9.	Write a JavaScript function isEven that takes a number as an argument and returns true if the number is even and false if it is odd. Provide an example with a sample number.
// 10.	Write a JavaScript function sumArray that takes an array of numbers as an argument and returns the sum of all the numbers in the array. Provide an example with an array of numbers.
// 11.	Define a JavaScript object car with properties make, model, and year. Write a function getCarModel that takes this object and returns the model of the car.
// 12.	Write a JavaScript function concatenateStrings that takes two strings as arguments and returns a new string that is the concatenation of the two input strings. Provide an example with two sample strings.
// 13.	Write a JavaScript function square that takes a number as an argument and returns its square. Provide an example of calling this function with a sample number.
// 14.	Write a JavaScript function findMax that takes an array of numbers as an argument and returns the largest number in the array. Provide an example with an array of numbers.
// 15.	Define a JavaScript object student with properties firstName, lastName, and grade. Write a function getFullName that takes this object and returns the full name of the student in the format "firstName lastName".
// 16.	Write a JavaScript function greet that takes a name as an argument and returns a greeting string in the format "Hello, [name]!". Provide an example of calling this function with a sample name.
// 17.	Write a JavaScript function doubleArray that takes an array of numbers as an argument and returns a new array with each number doubled. Provide an example with an array of numbers.
// 18.	Define a JavaScript object movie with properties title, director, and releaseYear. Write a function getMovieTitle that takes this object and returns the title of the movie.
// 19.	Write a JavaScript function getLength that takes a string as an argument and returns the length of the string. Provide an example with a sample string.
// 20.	Write a JavaScript function subtract that takes two numbers as arguments and returns their difference. Provide an example of calling this function with two numbers.
// 21.	Write a JavaScript function mergeArrays that takes two arrays as arguments and returns a new array containing all elements from both arrays. Provide an example with two arrays.
// 22.	Define a JavaScript object recipe with properties name, ingredients (an array), and servings. Write a function getIngredientList that takes this object and returns the ingredients array.
// 23.	Write a JavaScript function endsWith that takes a string and a character as arguments and returns true if the string ends with the given character, otherwise false. Provide an example with a sample string and character.
// 24.	Write a JavaScript function divide that takes two numbers as arguments and returns their quotient. Provide an example of calling this function with two numbers.
// 25.	Write a JavaScript function removeFirstElement that takes an array as an argument and returns a new array with the first element removed. Provide an example with an array.
// 26.	Define a JavaScript object album with properties title, artist, and tracks (an array of track names). Write a function getTrackCount that takes this object and returns the number of tracks.
// 27.	Write a JavaScript function startsWith that takes a string and a character as arguments and returns true if the string starts with the given character, otherwise false. Provide an example with a sample string and character.
// 28.	Write a JavaScript function isPositive that takes a number as an argument and returns true if the number is positive and false if it is negative or zero. Provide an example with a sample number.
// 29.	Write a JavaScript function countElements that takes an array as an argument and returns the number of elements in the array. Provide an example with an array.
// 30.	Define a JavaScript object game with properties name, genre, and platforms (an array of strings). Write a function getPlatformList that takes this object and returns the platforms array.
