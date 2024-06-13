
// // square patterns

// const n = 3;
// let str = "";

// for(let i = 1; i <= n; i++) { 
    
//     for(let j = 1; j <= n; j++) { 
//         str +="*";
//     }
    
//     str +="\n"; 
// }

// console.log(str);



// triangle pattern

// const n = 7;
// let str = '';

// for (let i = 1; i <= n; i++) {
    
//     for (let j = 1; j <= i; j++) {
//         str += '* ';
//     }
//     str += '\n';
// }
// console.log(str);

// 

// const n = 5;
// let str = '';

// for (let i = 1; i <= n; i++) {
    
//     for (let j = 1; j <= n; j++) {
//         if (j <= n - i) {
//             str += '  ';
//         } else {
//             str += '* ';
//         }
//     }
//     str += '\n';
// }    

// console.log(str);


// traiangle pattern


// let n = 5;
// for(let i=1; i<=n; i++){
//     let str = "* ";
//     let space ='  '
//     console.log(space.repeat((n-i))+str.repeat(n-i))
// }

// square pattern

// let n = 5;
// for(let i=1; i<=n; i++){
//     let str = "* ";
//     console.log(str.repeat(5))
// }

// 


// let n = 5;
// for(let i=1; i<=n; i++){
//     let str = "* ";
//     console.log(str.repeat(n-i))
// }


// const n = 5;
// let str = '';

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         if (j <= i - 1) {
//             str += '  ';
//         } else {
//             str += '* ';
//         }
//     }
//     str += '\n';
// }    

// console.log(str);


// const n = 5;
// let str = '';

// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= n - i; j++) {
//         row += ' ';
//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         row += '*';
//     }
//     str += row + '\n';
// }

// console.log(str);

// const n = 5;
// let str = '';
// for (let i = n; i >= 1; i--) {
//     let row = '';
//     for (let j = 1; j <= n - i; j++) {
//         row += ' ';
//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         row += '*';
//     }
//     str += row + '\n';
// }
// console.log(str);

for(let i=0; i<5; i++){
    if(i===3){
        return;
    }
    console.log(i)
}