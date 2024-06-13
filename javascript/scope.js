// closerfunction

// function outerFunction() {
//     let outerVar = "I am outside!";
    
//     function innerFunction() {
//         console.log(outerVar); // Can access outerVar
//     }
    
//     return innerFunction;
// }

// const myClosure = outerFunction();
// myClosure(); // Logs: "I am outside!"


// coser function

// function createCounter(){
//     let count = 0;

//     function counter(){
//         count++
//        return count;

//     }
//         return counter;
// }

// const increament = createCounter();
// console.log(increament());
// console.log(increamemt());
// console.log(increament());


// callby function
 /*  
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
*/

// function greet(name,callback) {
//     callback(name)
    
// }
// greet("rupesh", sayName);

// function sayName(name) {
//     console.log("hello " + name + " goodbye")
// }

// function add(num1,num2,callback){
//     let added = num1 + num2

//     callback(added)
// }

// add(5,8,subract)

// function sub(num1 , num2){
//     let subract= num1-num2
//     console.log(subract)

// }

// recheck in home 

// function sub(a,b,multiply){
//     let subract=a-b;
//     console.log(subract);
// }

// function mul(c,d){
//     let multiply=c*d;
//     console.log(multiply)


// }
// multiply




// function greet(name,caste){
//     console.log("hello Mr. " +  name + " "+ caste );

// }
// function lName(fName, callback){
//     callback(fName,"yadav");
// }
// lName("ram", greet);

/*
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

function removeNeg(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }
    return myArray;
}

const posNumbers = removeNeg(myNumbers, (x) => x >= 0); 
console.log(posNumbers)**/


//promise function

/*
let promise = new Promise(function (resolve, reject) {
    const data = "geeksforgeeks";
    if (true) {
        resolve();
    } else {
        reject();
    }
});

promise.
then(function () {
    console.log('Success, You are a GEEK');
}).
catch(function () {
    console.log('Some error has occurred');
});

*/

/*
let promise = new Promise(
    (resolve , reject)=>{
        let x=50;
        if(x<=50){
           resolve("the value is less than 50 .")
    }else{
        reject("the value is more than 50.")
    }

    });

promise .then((Success)=>{
    console.log(Success)

})   
.catch((reject)=>{
    console.log(reject)

})

**/
/*
let promise = new Promise(
    (resolve , reject)=>{
        let data="rupesh";
        if(!data){
           resolve("its me rupesh .")
    }else{
        reject("he is not rupesh.")
    }

    });

promise .then((Success)=>{
    console.log(Success)

})   
.catch((reject)=>{
    console.log(reject)

})


*/

// async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//       resolve("I love You !!");
//     });
//    console.log (await myPromise);
//   }
  
//   myDisplay();
/*

async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("I miss You !!");}, 1000);
    });
    console.log(await myPromise);
  }
  
  myDisplay();  
*/

function fetchData() {
    // return new Promise((resolve)=>{
         setTimeout(()=>{
            console.log ("data fetched")
        } , 1000)
    // })

}
function getData(){
     fetchData();
 
}
getData();

function asynchronous_operational_method() {
    let first_promise = 
        new Promise((resolve, reject) => resolve("Hello"));
    let second_promise = 
        new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(" GeeksforGeeks..");
        }, 1000);
    });
    let combined_promise = 
        Promise.all([first_promise, second_promise]);
    return combined_promise;
}

async function display() {
    let data = await asynchronous_operational_method();
    console.log(data);
}

display();
