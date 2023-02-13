

// <!-- what is an object ...? -->


// <!-- The difination of "this" object is that it contain the current context.
// the this object can have different values depending on where it is placed. -->

// <!-- example 1: -->

// <!-- console .log (this.alert('Awesome')); -->
// <!-- it refers to the current context and that is window global object -->


// <!-- example 2  -->

// <!-- function myName(){
//     console.log(this)
// }
// myName();

//  -->

// <!-- example 3  -->

// <!-- var myNames ='jabbar';
//  function myName(){
//     consloe.log(this.myNames);

//  }
//    myName();

//  -->



// <!-- example 4 -->


//  const obj = {
    
//     myAge : 24,
//     myName : 'Abdul jabbar',
//     myBio(){
//         console.log(this.myAge.myName);
//     }
//  }
//  obj.myBio();


// 
// <!-- example 5-->
// fat arrow function ma this object use  ni kr skty 

// const  obj = {
//   myAge : 24,
//   myName : () =>{
//     console.log(this);
//   }
// }



// let myBio = {
//   myName :{
//     realName : "Abdul Jabbar",
//     rollNo : 22
//   },

//   myAge :24,
//   getData(){
//     console.log(`my name is ${this.myName.rollNo} and my age is ${this.myAge}`);
//   }
// }

// myBio.getData()