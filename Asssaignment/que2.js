// const marks=65
// // var mark=prompt("enter the scoore");
// // marksScore(mark)
// if(marks<=40){
//     console.log("fail")
// }else if(marks<=60){
//     console.log("grade B")
// }else if(marks<=80){
//     console.log("grade A")
// }else if(marks>=90){
//     console.log("distinction")
// }else{
//     console.log("invalid grade")
// }




// let weight=60;//kg
// // let height_in_ft=5.5; //foot
// let height=1.6764;//meter
// let bmi=weight/(height*height);
// console.log(bmi);




// let a=30;
// let b=40;
// if(a<b){
//     console.log("a is greater than b");
// }else{
//     console.log("a is less than b");
// }



/**  Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.*/



// let age = 40

// if(age<12){
//     console.log("ticket price is 5");
// }else if(age>12 && age>18){
//     console.log("ticket price is 10");
// }else if(age>18 && age>60){
//     console.log("ticket price is 20")
// }else if(age>60 && age>80){
//     console.log("ticket price is 15")
// }else{
//     console.log("invalid ticket")
// }



// switchcase

// let age = 25
// const price=prompt("enter the age of child");
// const ageNumber=parseInt(age)

// const age = 20
// switch(true){
//     case age<12:
//         console.log("ticket price is 5");
//         break;
//     case age<18 && age>12:
//         console.log("ticket price is 10")
//         break;
//     case age<60 && age>18 :
//         console.log("ticket price is 20")
//         break  
//     case age>=60:
//         console.log("price ticket is 15")
//         break;
//     default:
//         console.log("invalid ticket")   
//         break; 

       
// }

// que 10

// Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players clues if their guess is higher, lower or correct.

// let a=15;
// b=20;
// if(a === b){
//     console.log("congurlation ")
//     }else if(a<b){
//         console.log("try higher number ")
//     }else{
//         console.log("try lower number")
//     }

// ..  



// Write a program that checks if a number is even or odd.
 
// let a= 6;
// if (a % 2 === 0) {
//   console.log("The number is even.");
// } else {
//   console.log("The number is odd.");
// } 


// que profit = sp-cp

// let cp= 200
// let sp=1000
// if(sp>cp){
// let profit=sp-cp
// profit= profit/cp*100;

//   console.log("profit = " + profit + "%");
//   console.log(`profit = ${profit}%`)

// }else{
//   let loss=cp-sp;
//   loss=loss/cp*100;
//   console.log("loss = " + loss + "%");

// }



const sp=1000
const cp=500
 switch(true){
  case (sp>cp):
    let profit=sp-cp ;
    profit= profit/cp*100;
    console.log(`profit = ${profit}%`);
    break;
  case (cp>sp):
    let loss=cp-sp;
    loss=loss/cp*100;
    console.log(`loss = ${loss}%`) ;
    break;
  default:
    console.log("neither profit or loss");
    break; 
    
  
}