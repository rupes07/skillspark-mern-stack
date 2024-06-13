// function fetchData() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve([
//           { id: 1, name: "John Doe", age: 30 },
//           { id: 2, name: "Jane Doe", age: 25 },
//           { id: 3, name: "Bob Smith", age: 40 }
//         ]);
//       }, 2000);
//     });
//   }
//   async function getData(){
//     const data = await fetchData();
//     console.log(data);
//   }
// getData() 

// /////
// function createCounter() {
//     let count = 0;
  
//     return {
//       increment: function() {
//         count++;
//       },
//       getCount: function() {
//         return count;
//       }
//     };
//   }  
// const counter = createCounter();
// console.log(counter.getCount());
// counter.increment();
// console.log(counter.getCount()); 
// counter.increment();
// console.log(counter.getCount()); 
  
// // ////
// // function processData(arr, callback) {
// //     const result = [];
// //     for (let i = 0; i < arr.length; i++) {
// //       result.push(callback(arr[i]));
// //     }
// //     return result;
// //   }
// //   const numbers = [1, 2, 3, 4, 5];

// // const doubleNumbers = processData(numbers, function(x) {
// //   return x * 2;
// // });

// // console.log(doubleNumbers); 

// // /////

// // const numbers = [1, 2, 3];
// // const doubleNumbers = numbers.map(num => num * 2);
// // console.log(doubleNumbers); // Output: [2, 4, 6]

// // ////
// // const numbers = [3, 5, 8, 10, 12, 15];
// // const filteredNumbers = numbers.filter(num => num >= 10);
// // console.log(filteredNumbers); // Output: [10, 12, 15]

// // ////

// // const numbers = [3, 5, 8, 10, 12, 16, 20, 25];
// // const firstNumberGreaterThan15 = numbers.find(num => num > 15);
// // console.log(firstNumberGreaterThan15); // Output: 16

// // /////

// // const numbers = [1, 2, 3, 4, 5];
// // const sum = numbers.reduce((acc, current) => acc + current, 0);
// // console.log(sum); // Output: 15

// // /////

// const users = [
//   { id: 1, name: 'John', email: 'john@example.com' },
//   { id: 2, name: 'Jane', email: 'jane@example.com' },
//   { id: 3, name: 'Bob', email: 'bob@example.com' },
  
// ];

// const userIdToObject = users.reduce((acc, user) => {
//   acc[user.id] = user;
//   return acc;
// }, {});

// console.log(userIdToObject);

// ////

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   describe() {
//     return `${this.name} is ${this.age} years old.`;
//   }
// }
// const john = new Person('John', 30);
// console.log(john.describe()); // Output: "John is 30 years old."

// const jane = new Person('Jane', 25);
// console.log(jane.describe()); // Output: "Jane is 25 years old."

// //

// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }

//   study() {
//     return `${this.name} is studying for their ${this.grade} grade.`;
//   }
// }
// const john = new Student('John', 16, 11);
// console.log(john.describe()); // Output: "John is 16 years old."
// console.log(john.study()); // Output: "John is studying for their 11 grade."

// const jane = new Student('Jane', 17, 12);
// console.log(jane.describe()); // Output: "Jane is 17 years old."
// console.log(jane.study()); // Output: "Jane is studying for their 12 grade."


// ////
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     const randomBoolean = Math.random() < 0.5; // 50% chance of rejecting the promise
//     if (randomBoolean) {
//       reject(new Error("Failed to fetch data"));
//     } else {
//       resolve("Data fetched successfully!");
//     }
//   });
// }

// fetchData()
//  .then((data) => console.log(data))
//  .catch((error) => console.error("Error:", error.message));

//  /////

 