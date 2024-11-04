// Q1) Write a JavaScript program to construct the following pattern, using a nested for loop.
//       * 
//       * * 
//       * * *  
//       * * * *
//       * * * * *

// let x = 5;
// for (let i = 1; i <= x; i++) {
//     let pattern = '';
//     for (let j = 1; j <= i; j++) {
//         pattern += '* ';
//     }
//     console.log(pattern);
// }
// ...........................................................................



// Q2) Iterate through all numbers from 1 to 45. Print the following:

//    For multiples of 3 print “Fizz”
//    For multiples of 5 print “Buzz”
//    For multiples of 3 and 5 print “FizzBuzz”
// var num = [1,45]

// var i = [1, 45];
// for(var i=1; i<=45; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//      console.log("FizzBuzz");
//       if(i % 3 === 0){
//         console.log("Fizz");
//     }
//     else if(i % 5 === 0){
//         console.log("Buzz");
//     }else{
//      console.log(i);
//     }
// }
// }

// .............................................................................



// Q3) Calculate the sum of all the number in the array?
//   var numberArray = [1, 13, 22, 123, 49]

// var arr = [1, 13, 22, 123, 49]
// var sum = 0;

// for(i=0; i<arr.length; i++){

//    sum += arr[i];
// }
// console.log("Array num of sum:",sum);

// ..............................................................................



// Q4) Get the sum of two array .. actually the sum of all their element. 

// P.S. Each array includes only integer numbers. Output is a number too.


// let arr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
// let arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
// sum1 = 0;
// sum2 = 0;
// total = 0;
// for(i=0; i<arr1.length; i++){
//       sum1 += arr1[i];
// }
// for(j=0; j<arr2.length; j++){
//     sum2 += arr2[j];
//     total = sum1 + sum2
// }
// console.log("Array no of sum  1:",sum1);
// console.log("Array no of sum  2:", sum2);
// console.log("total    number:", total);

//  output: 
//  276 + 351 = 627

// ...............................................................................



// Q5.Using a for loop output the elements in reverse order


//  var arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
//  reversedArr = [];

// for(i=arr.length -1; i>=0; i--){
//    reversedArr.push(arr[i])
//    console.log(arr[i]);         //Assisseble
// }

// console.log(reversedArr);        //Assisseble

// output:
//   true 3.5  be  false cannot  true 9 what 43 OR each item   on a new line