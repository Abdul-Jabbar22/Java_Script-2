// // console.log("hello world");

// // Variables in JS


// // var myName = "Abdul Jabbar";
// // var myAge = 24;


// // var  $myName = "Abdul";    //valid   

// // var 1myname = "jabbar"; // non valid

// // var _myname__Name = "Abdul Jabbar"  //valid



// // // DataTypes in Js
// //  six data types that are primitives.

// //  1. undefined : typeof instance === "undefined"
// //  2. Boleean : typeof instance ===  "boleean"
// //  3. Number : typeof instance ==== "number"
// //  4. String :typeof instance === "string"
// //  5. Bigint : typeof instance === "bigint"
// //  6. Symbol : typeof instance === "symbol"

// // console.log(typeof( _myname__Name));
// // console.log(typeof( myAge));
// // var iAmjabbar = true;
// //  console.log(iAmjabbar);


// //  console.log(typeof(iAmjabbar))

// // practice set 

// // console.log( 10 + "20");  //concate
// // console.log(9 - "5"); // bug
// // console.log ("java" -  "Script") //concate


// // console.log(" " + 0);
// // console.log(true + true);
// // console.log(false + true);
// // console.log(false - true);


// // Null  Vs Undefined

// // var Iamuseless = null;
// // console.log(Iamuseless)


// // var iAmStandBy;
// // console.log( iAmStandBy)

// //what is NaN and its practice


// // var myPhoneNumber = 747474774;
// // var myName  = "Abdul Jabbar";

// // console.log(isNaN(myPhoneNumber));  //if youe Value is valid it return fals other wise true

// // console.log(isNaN(myName));
// // if(isNaN(myName)){
// //     console.log("please enter valid phone number")
// // }

// // NaN === NaN ;
// // Number.NaN === NaN ;
// // isNaN(NaN);
// // isNaN(Number.NaN);
// // Number.isNaN(NaN);


// // console.log(NaN === NaN)          //false
// // console.log(Number.NaN === NaN);  //false
// // console.log(isNaN(NaN));          //true
// // console.log(isNaN(Number.NaN));    //true
// // console.log(Number.isNaN(NaN));    //true



// // 3 Section Expressions and Operators 



// // console.log(5+20);


// // Assignment  operators
// // an assignment operator assigns the value to is left oprand based on the valude of its right operand. 
// // 

// // var x = 5;
// // var y = 5;

// // console.log ("is both are same are not" + x == y); false bcos plus oprator used
// // console.log(x == y) true

// // console.log("Is both the x and y are equal : ${x == y}");

// // Arithmetic operators
// // An arithmetic operators takes numberical values (either literals or variables) as their operands retruns a sinngle
// // numberical values

// // console.log(3+3);     //  plus           oprator
// // console.log(10-5);    //  Subtract       oprator
// // console.log(20/5);    //  divide         oprator
// // console.log(5*6);     //  mulutiply      oprator

// // console.log(81%8);    //  reminder       oprator
  

// // increment and decrement operators 

// // oprators : x++ or ++x or x-- or --x 

// // postfix increment operators

// // var num = 15;
// // var num1 = num++;
// // console.log(num);
// // console.log(num1);

// // prefix increment opertars
// // prefix increment operator meana the variable is incremented first and then the expression is evaluatd 
// // usingg the new value of the variable.

// // var num = 15;
// // var numNew = ++num;
// // console.log(num);
// // console.log(numNew);

// // postfix decrement operators


// // var num = 15;
// // var num1 = num--;
// // console.log(num);
// // console.log(num1);


// // prefix decrement operators

// // var num = 15;
// // var num1 = --num ;
// // console.log(num);
// // console.log(num1);c

// // comparison operators 

// // var a = 10;
// // // var b = 10;

// // equal to(==)
// // console.log(a==b);

// // not equal to (!=)
// // console.log(a!=b);

// // greater than or equal to(>,>=)



// // console.log(a>=b);
// // console.log(a>b);


// // less than or equal to(<,<=)
// // console.log(a<b);


// // console.log(a<b);
// // console.log(a<=b);


// // logical operaors


// // var a = 30;
// // var b = -20;

// // logical AND (&&) 
// // both expresion should be true then it will return true

// // console.log(a>b && b>0)


// // logical OR (||)
// // one expression should be true 

// // console.log((a>b )|| (a<b) || (a < 100));

// // logical NOt operator (!)
// // its change true into false and false into true

// // console.log(!(a>b));
// // console.log(!false);
// // console.log(!true);



// // Strings operators
// // The concatenation operator (+) concatenates two string values together,
// // returning another string that is the union of the two operand strings.

// // console.log("Abdul Jabbar");
// // console.log("Abdul "+"jabbar");


// // let myName = "Abdul"
// // console.log(myName+" Jabbar");



// // chalenge Time#
 
// // Q1#   what will the out put of 3**3
// // Ans:  console.log(3**3); // 3*3*3=27 //Exponentiation operator 
// //       console.log(9**2); // 9*9 = 81 


// // Q2# what will the output when we add a number and a string
// // Ans :console.log(5 + "Abdul"); //output will 5Abdul


// // Q3# swap two numbers

// // var a = 5;
// // var b = 10;

// // var c = b;
// // b = a;
// // a = c;
// // console.log("The value of a is "+a);
// // console.log("The value of a is "+b);

// // Q4# write a program to swap two numbers without using third variables

// // var a = 5;
// // var b = 10;

// // a = a+b ;
// // b = a-b;
// // a= a-b;

// // console.log("The value of a is "+a);
// // console.log("The value of a is "+b);


// // Interwiew question 
// // what is the Diff b/t == vs ===


// // var a = 5;
// // var b = "5";

// // console.log(typeof(a));
// // console.log(typeof(b));
// // // console.log(a==b);   //==  check only values which are same it rturn true
// // console.log(a===b);   //==== check values as well ass datatype values are same but datatype are diff so it return false

// // SECTION 4 CONTROL STATEMENTS AND LOOPS

// // if raining == raincoat
// // else not raincoat
// // if statement

// // var tomoro= "Sun";
// // if(tomoro == "rain"){
// // console.log("Wear rain  coat");
// // }else{
// //     console.log("not need to take raincoat");
// // }

// // chalenge Write a program to check if the year is leap or 

// // var year = 2023;

// // if(year%4 === 0){
// //     console.log("This is leap year");
// // }else{
// //     console.log("not a leap year");
// // }

// // what is truthly and falsy values in javaScript
// // we have 5 values in javaScript
// // 0 , "" , undefined , null , NaN , 

// // if(undefined){
// // console.log("we loss the game");
// // }else{
// // console.log("we won the game");
// // }

// // conditional ternary operator/
// //  The conditional ternary operator is the only javascript operator that taks three oprands

// // variablename = (condition)? value 1 : value 2

// // var age = 19;
// // console.log((age >= 18)? "you can vote":"you can't vote");

// // else if statements

// // var area = "circle";
// // var PI = 3.142 , l= 5, w = 4 ,r=3;

// // if(area == "circle"){
// //     console.log("the area of circle is " + PI*r**2);
// // }else if(area == "triangle"){
// //     console.log("the area of triangle is " + (l*w)/2);
// // }else if (area == "recta"){
// //     console.log("area of rectangle "+ (l*w));
// // }else{
// //     console.log("please enter the valid value");
// // }


// // var area = "triangle";
// // var PI = 3.142 , l= 5, w = 4 ,r=3;

// // if(area == "circle"){
// //     console.log("the area of circle is " + PI*r**2);
// // }else if(area == "triangle"){
// //     console.log("the area of triangle is " + (l*w)/2);
// // }else if (area == "recta"){
// //     console.log("area of rectangle "+ (l*w));
// // }else{
// //     console.log("please enter the valid value");
// // }


// // var area = "rectangle";
// // var PI = 3.142 , l= 5, w = 4 ,r=3;

// // if(area == "circle"){
// //     console.log("the area of circle is " + PI*r**2);
// // }else if(area == "triangle"){
// //     console.log("the area of triangle is " + (l*w)/2);
// // }else if (area == "rectangle"){
// //     console.log("area of rectangle "+ (l*w));
// // }else{
// //     console.log("please enter the valid value");
// // }

// // var area = "square";
// // var PI = 3.142 , l= 5, w = 4 ,r=3;

// // if(area == "circle"){
// //     console.log("the area of circle is " + PI*r**2);
// // }else if(area == "triangle"){
// //     console.log("the area of triangle is " + (l*w)/2);
// // }else if (area == "rectangle"){
// //     console.log("area of rectangle "+ (l*w));
// // }else{
// //     console.log("please enter the valid value");
// // }


// // switch statements
// // var area = "triangle";
// // var PI = 3.142 , l= 5, w = 4 ,r=3;

// // switch(area){
// //     case 'circle':
// //        console.log("the area of circle is " + PI*r**2);
// //        break;

// //     case 'triangle':
// //        console.log("the area of triangle is " + (l*w)/2);
// //        break;

// //     case 'rectangle':
// //        console.log("area of rectangle "+ (l*w));
// //        break;
       
       
// //     default:
// //         console.log("please enter the valid value");
// // }


// // while loop statement
// // The while loop creats a loop that execute a specified statement as long 
// // as the test condition evaluates to true.


// // var num = 0;
// // //block scope
// // while(num <=1000){
// //     console.log(num);
// //     num++;
// // }

// // do while loop
// // var num = 20;
// // do{
// //     console.log(num);
// //     num++;
// // }while(num<=10);



// // for loops  

// // for( var num = 9; num<= 10; num++){
// //     console.log(num);
// // }

// // challange time creating a table

// // for(i = 1;i<=10;i++){
// //     var num = 8;
// //     console.log(num + " * " + i + " = " + num*i);
// // }

// // FUNCTION IS JAVASCRIPT

// // function functionName()
// // {
// //     statement
// // }

// // function sum(){
// //     var a = 10, b = 20; //function defination
// //     var total = a+b;
// //     console.log(total); 
// // }
// // sum();  // calling a function



// // function parameters vs arguments

// // function sum(a,b){
// //     // var a = 10, b = 20; 
// //     var total = a+b; 
// //     console.log(total); 
// // }
// // sum(12,2);
// // sum(54,2);
// // sum(12,52);

// // function expression /
// // function expresion simply means create a  function and put it into the 
// // variables

// // function sum(a,b){
// //     var total = a+b;
// //     console.log(total); 
// // }
// // sum(12,2);

// // var funExp = sum(5,15);
// // console.log(funExp);

// // return keyword


// // function sum(a,b){
// //     // var total = a+b;
// //     return  total = a+b ;
// // }
// // // sum(12,2);

// // var funExp = sum(5,15);
// // console.log("the sum of total num is " +funExp)



// // anonymus function 

// // var funExp  = function(a,b){
// //     return  total = a+b
// //     // var total = a+b;
   
// // }
// // // sum(12,2);
// //   var sum = (funExp(5,15));

// // console.log("the sum of total num is " +sum)


// // function biodata(){
// //   let myfirstName = "Abdul";
// //   console.log(myfirstName);


// // if(true){
// //     let mylastname = "JAbbar";
// //     console.log("Inner" + mylastname);
// //     console.log("inner" + myfirstName);
// // }
// // console.log("outr "+mylastname);

// // }
// // biodata();





// // Templete literals


// // for(let i = 1;i<=10;i++){
// //     var num = 8;
// //     // console.log(num + " * " + i + " = " + num*i);
// //     console.log(` ${num} * ${i} = ${num * i}`);
// // }


// // Default Parameters

// // function mulutiply(a,b){
// //     return a*b;

// // }
// // console.log(mulutiply(5,10));

// // function mulutiply(a,b=4){
// //     return a*b;

// // }
// // console.log(mulutiply(5));


// // Fat Arrow functions

// // normal function writing

// // console.log(sum());
// // function sum(){
// //     let a = 5; b = 6;
// //     let sum = a+b;
// //     return ` The sum of the two numbers is ${sum}`;
// // }



// // const sum = () => {
// //     let a = 5; b = 6;
// //     let sum = a+b;
// //     return ` The sum of the two numbers is ${sum}`;
// // }

// // console.log(sum());


// // const sum = () =>  ` The sum of the two numbers is ${(a=5)+(b=10)}`;
// // console.log(sum());




// // ARRAYS IN JAVASCRIPT


// // var myName  = ["abdul","jabbar","abu","safyan"]

// // console.log(myName[myName.length  -1]);


// // if we want to check he length of an array

// // console.log(myName.length);

// // var myName  = ["abdul","jabbar","abu","safyan"]

// // for(var i=0; i<myName.length; i++){
// //     console.log(myName[i]);
// // }


// // for in and for off loops

// // var myName  = ["abdul","jabbar","abu","safyan"]


// // for(let index in myName){  //for in loop its return indexs number
// //     console.log( index);
// // }


// // for off loof 

// // var myName  = ["abdul","jabbar","abu","safyan"]

// // for(let elements of myName){ // its return elements of array
// //     console.log(elements);
// // }



// // for each loop

// // var myName  = ["abdul","jabbar","abu","safyan"]

// // myName.forEach(function (element, index,array){

// // console.log(element);

// // });

// // using fat arrow function

// // myName.forEach((element,index,array) =>
// // {
// // console.log(element + index + " " + array);
// // });


// // searching and filtering an array 

// // indexOf() method

// // var myName  = ["abdul","jabbar","abu","safyan"]

// // Converting Arrays to Strings
// // The JavaScript method toString() converts an array to a string of (comma separated) array values.

// // myName.toString();
// // console.log(myName);

// // Popping and Pushing
// // When you work with arrays, it is easy to remove elements and add new elements.

// // This is what popping and pushing is:

// // Popping items out of an array, or pushing items into an array.



// // var myName  = ["abdul","jabbar","abu","safyan"]

// // // JavaScript Array pop()
// // // The pop() method removes the last element from an array:


// // myName.pop();
// // // console.log(myName);
// // myName=myName.pop();
// // console.log(myName);

// // JavaScript Array push()
// // The push() method adds a new element to an array (at the end):

// // var myName  = ["abdul","jabbar","abu","safyan"]

// // myName.push("Hira");
// // console.log(myName);


// // Shifting Elements
// // Shifting is equivalent to popping, but working on the first element instead of the last.

// // var myName  = ["abdul","jabbar","abu","safyan"]

// // myName.shift();
// // console.log(myName);


// // JavaScript Array unshift()
// // The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

// // var myName  = ["abdul","jabbar","abu","safyan"]

// // myName.unshift("hira")
// // console.log(myName);

// // Changing Elements


// // var myName  = ["abdul","jabbar","abu","safyan"]

// // myName[0]="hira";
// // console.log(myName);

// // Merging (Concatenating) Arrays
// // The concat() method creates a new array by merging (concatenating) existing arrays:

// // var boys = ["abdul","jabbar","abu","safyan"]
// // var girls  = ["hira","kinza","amna"]

// // var myTeam = boys.concat(girls);

// // console.log(myTeam);

// // merging three arrays


// // var boys = ["abdul","jabbar","abu","safyan"]
// // var girls  = ["hira","kinza","amna"]
// // var myCzns =["usman","aliza"]

// // var myTeam = boys.concat(girls,myCzns);

// // console.log(myTeam);

// // Splicing and Slicing Arrays
// // The splice() method adds new items to an array.

// // The slice() method slices out a piece of an array.

// // JavaScript Array splice()
// // The splice() method can be used to add new items to an array:

// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.splice(2, 0, "Lemon", "Kiwi");

// // console.log(fruits);

// // The first parameter (2) defines the position where new elements should be added (spliced in).

// // The second parameter (0) defines how many elements should be removed.

// // The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// // The splice() method returns an array with the deleted items:

// // Using splice() to Remove Elements
// // With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.splice(0,1);

// // // 

// // The first parameter (0) defines the position where new elements should be added (spliced in).

// // The second parameter (1) defines how many elements should be removed.

// // The rest of the parameters are omitted. No new elements will be added.



// // JavaScript Array slice()
// // The slice() method slices out a piece of an array into a new array.

// // This example slices out a part of an array starting from array element 1 ("lemon"):

// // const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// // const citrus = fruits.slice(2);

// // console.log(fruits);
// // const citrus = fruits.slice(1);

// // console.log(citrus);

// // JavaScript Sorting Arrays

// // Sorting an Array
// // The sort() method sorts an array alphabetically

// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.sort();

// // console.log(fruits);

// // Reversing an Array
// // The reverse() method reverses the elements in an array.

// // You can use it to sort an array in descending order:

// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.reverse();

// // console.log(fruits);


// // Numeric Sort
// // By default, the sort() function sorts values as strings.

// // This works well for strings ("Apple" comes before "Banana").

// // However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// // Because of this, the sort() method will produce incorrect result when sorting numbers.

// // You can fix this by providing a compare function:



// // Map() , Reduce(), filter () in javascript

// const  array = [1,4,9,16,5];

// // let newarray = array.map((current,index,array) => {
// //     return current >9;
// // }) 
// // console.log(array);
// // console.log(newarray);

// // let newArray = array.map((current,index,array) => {
// //     return `index no = ${index} and the vlue is ${current} belong to ${array}`
// // }

// // )
// // console.log(newArray);


// chalenge Time

// find the square ropot of each element in an array?



// let arr = [25,36,49,64,81];

// let arrSquare = arr.map((currentEle,index,arr)=> Math.sqrt(currentEle) 
// )
//  console.log(arrSquare);


// multply each elemment  by 2 and return only those elements which are greater than 10
// we can use chaining method also

// let arr = [2,3,4,6,8]
 
// let arr2 = arr.map((currentEle)=> currentEle * 2).filter((currentEle)=> currentEle >10).reduce((accumulator,currentEle) => accumulator += currentEle);
// console.log(arr2);

// reduce method 

// let arr = [5,6,2];

// let sum = arr.reduce((accumulator,current,index,arr)=>{
//     debugger;
//   return accumulator *= current;
   

// },)
// console.log(sum);


// how to fallten an array 

// const arr = [ ['zone1','zone2',]
//                ['zone3','zone4']
//                ['zone5','zone6']


// ];

// let flatArr = arr.reduce((accum, currentVal) => {
//     return accum.concat(currentVal);
// })

// console.log(flatArr);

// let arr = ["John Doe", ["Lily Rose", 23]];

// // convert nested array into single array
// let convertedArr = arr.flat();

// console.log(convertedArr); // ["John Doe", "Lily Rose", 23]


//  STRINGS IN JAVASCRIPT

// let myName = "Abdul jabbar";

// console.log(myName.length);

// Escap charactere 

// let anysetence = "we are the so-called \"vikings\" from the north";

// console.log(anysetence);

// method indexof 
// const mybio = "I am abdul Jabbar and learning web development ";

// console.log(mybio.indexOf("bb"));

// lastindexof
// const mybio = "I am abdul Jabbar and learning web development";

// console.log(mybio.lastIndexOf("jabbar"));


// search methods 

// lastindexof 
// const mybio = "I am abdul Jabbar and learning web development";
  
// const data = mybio.search("Jabbar");
// console.log(data);

// Extract method 
// The slice methodo 
// The slice() method extracts a part of a string.

// The slice() method returns the extracted part in a new string.

// The slice() method does not change the original string.

// The start and end parameters specifies the part of the string to extract.

// The first position is 0, the second is 1, ...

// A negative number selects from the end of the string.


// var str = "ali, ahmed, Jabbar";

// var res =  str.slice(0,10);
// console.log(res);



// Q : Display only 280 characters of a string like the one used in twiter 

// let myTweets = "jjkajjsdkljf dfksdjlkfjdslkjflkdsjfkl sdflkjsdspfjkdsjflkdsjlfjsdlksjfds fjjlldsjflksdajfljsd'lklfjsddufpojsdpofewwejfpojdsoifjopdsjfdpodojfpodjfpjdspojfplksdjpofojpoedfpoewokk;klsdafjofjdspsokjfpodspjfposdjf;lkdjsspofdl;kfposdssdopfkdofd;sjfpodsifpokdrpokepopoifposkfjfdopiopewirpoewfpojfpodkjpofide0ripeowpwjrpoewwifi-dskfpoeeur-0eie40rie]opjfpoipodsuf9dsfije0ifodojfpoijdopfi-ewd"


// let myActualtweeets = myTweets.slice(0,280);

// console.log(myActualtweeets);
// console.log(myActualtweeets.length);
  
//  what is the substring method 
//   substring is similar to slice()  the differnt is that
//   substring cannot accept  nagative value 


// var str = "Apple,banana, mango";

// let res = str.substring(8,-4)
// console.log(res);


// substr method 
// substr is similar to slice but 
// the differnt is that the second parameter specifies the length of the 
// extracted part 

// var str = "Apple,banana, mango";

// // let res = str.substr(0,5)
 
// let res =str.substr(-5);   //back se data extract ker skty

// console.log(res);



// Replacing string content 

// replace method replaces a specified value with another value 
// in string 

// string.prototype.replace(searchfor,replacewith)


// let myBio = `I am jabbar`;

// let replaceData = myBio.replace('jabbar','Safyan');

// console.log(replaceData);

// HOW TO EXTRACT METHODS 
//  charAt


// let str = "Abdul Jabbar";

// console.log(str.charAt(0));


// charcodeat to define unicode of the character always rturn integers

// let str = "Abdul Jabbar";
// let lastchr = str.length - 1 ;
// console.log(str.charCodeAt(lastchr));

// property access 



// var str = "Hello World";

// console.log(str[5]);

// othr useful methods for string 

// let str = "Abdul Jabbar";
//  console.log(str.toUpperCase());
//  console.log(str.toLowerCase());

// concat method 

// let fname = "Abdul";
// let  lname = "jabbar";

// // console.log(fname.concat(" ",lname));
// // 
// console.log(`${fname} ${lname}`);   //ecmascript ma easy ho jata ha 

// String trim method 

// converts the string into an array A string can be converted to 
// an array with the split method 

// var text = "a,b,c,d,e,f"; // a string

// console.log(text.split(",")); // split on commas
// console.log(text.split(" ")); //split on spaces
// console.log(text.split("|")); //split on pipe


// DATE AN Time Object 


