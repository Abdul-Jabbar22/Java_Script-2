// hoistin in javascript 
 
// hoisting in javascript is a mechanism where variable and function 
// decleration are moved to the top of their scope before the Code 


// for example 

// console.log(myName);

// var myName ;

// myName = "Abdul";


// // How it will be in out put during creation phase 

// 1: var myName = undefined ;

// 2: console.log(myName);

// 3: myName = "Abdul"
  
// hoisting is avoided by using let keyword instead of var 

// what is Scope chain and lexical scoping in javascript 

// lexicl scoping



// let  a = 'hllo ';

// const first =() =>{
//  let b = "how are you";

//  const second =() =>{
//     let c = " hi ,  i am fine thanku";

//     console.log(a+b+c);
//  }
//  second();

// }
// first();


// what is closures in javascript  

// const outerFun = (a) =>{
//     let b = 10;
//     const innerFun = () =>{
//         let sum = a+b;
//         console.log(`the sum of the two num is ${sum}`);
//     }
//     innerFun();

// }
//   outerFun(5);

//   an other examle 

//   const outerFun = (a) =>{
//     let b = 10;
//     const innerFun = () =>{
//         let sum = a+b;
//         console.log(`the sum of the two num is ${sum}`);
//     }
//      return innerFun;

// }
// let checkClousure = outerFun(5);

//   checkClousure();
//   console.dir(checkClousure);