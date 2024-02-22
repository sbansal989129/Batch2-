//  DataTypes - String,Number,boolean,undefined,null,objects(Array),NAN 


// let name = "Saurabh";

// //console.log(typeof(name));

// name = 2 ;

//console.log(typeof(name))

// let b = false 


// let c ;

// let d = null ;

// let arr = ["saurabh" , 25 , true , ["djdjie"] ];

// console.log(arr);


// operators 

// +,-,*,/,%

// < , <= , > , >= , == ,===

// let a = 9 ;
// let b = 10 ;

// console.log(a<=b);

 // == vs === 

 // == if the datatype of two variables are diffrent then it will first check 
 //    typecast the datatyp into sametype then check the data if the data is same 
 //    then it is a true  

 // === first check the datatype if the datatype is same then it will check the 
 //     data if both are same then only it will give us true 

// let a = 1 ;
// let b = "1" ;

// console.log( a === b );

// conditional Statements 

// if,else,else-if

// let a = 0 ;

// if(a>0){
//     console.log("Positive");
// }else if (a<0){
//     console.log("Negative");
// }else{
//     console.log("Zero")
// }

// loops 

// for loop, while loop , do-while loop 

// for(let i = 0 ;i<=100 ;i++){
//     console.log(i);
// }

// let i = 0 ;

// while(i<=100){
//     console.log(i);
//     i++;
// }

// let i = 0 ;
// do{ 
//     console.log(i);
//     i++;
// }while(i<=100)

// let i = 0 ;
// while(true){
//     console.log(i)
//     i++;
// }

let person = {
    name : "saurabh",
    age : 24 ,
   
}

// console.log( person["Hobbies"]);
// how to create copy of objects 
// 1) shallow copy 
// 2) Deep copy 

// this is shallow copy 

// let person2  = person ;

// person2.name = "Ajay";

// console.log(person);
// console.log(person2);

// deep copy 

// let person2 = JSON.parse(JSON.stringify(person));

// person2.name = "Ajay"

// console.log(person);
// console.log(person2)


// let arr = [ 1 ,2 ,3 ,5 ,7, 9 ];

// //push 

// arr.push(90); // item is added to the last 

// // unshift 

// arr.unshift(99); // adds element to the first 

// //pop 

// arr.pop() // delete the last ele 

// // shift 

// arr.shift(); // delete the first ele 

// // reverse();

// arr.reverse();

// // console.log(arr);


// what is function ??

// function is a block of code that is used to perform //
// specific task 

// function sum(a , b ){
//   let ans = a+b ;
//   return ans ;
// }

// console.log(sum(7,9))

// console.log(sum(70,9009))


// let multiply = function(a, b){
//     return a*b ;
// }

// function calc(multiply , b){
//     return multiply(b,6) *b ;
// }

// console.log(calc(multiply , 4))

// console.log(multiply(2,3));


// higher order functions 

// map , filter , reduce 

let arr = [1,2,3,4,5,6];


// let ansArr = arr.map(function(x){
//     return x*2;
// })
// console.log(arr);
// console.log(ansArr)

// let oddArr = arr.filter(function(ele){
//     return ele%2 != 0 
// })

// let sum = arr.reduce(function(pre , curr){
//     return pre + curr ;
// },0)

// console.log(sum)

// hositing is the process in which variables and function 
// will get the memory before the code execution 

console.log(a);

var a = 10 ;

console.log(a);

abc();

function abc(){
    console.log("Abc is called ")
}

abc();









