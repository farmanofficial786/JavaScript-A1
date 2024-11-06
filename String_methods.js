// JAVASCRIPT ASSINGMENT          
                           // STRING METHODS...


                                
// Que 1) Count Characters............................................................................

// function countCharacters() {
    
//     let B = [0, 0];
//     let S = "FFSR"

//     for (let char of S) {
//         if (char === 'A') {
//             B[0]++;
//         } else if (char === 'B') {
//             B[1]++;
//         }
//     }

//     return B;
// }

// console.log(countCharacters());



// Que 2) Count the Heads.............................................................................

// function CountHead() {
//     let charCount = {};
//     let result = 0;
//     let s = "FFSR"
    
//     for (let char of s) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
    
        
//     for (let char in charCount) {
//         if (charCount[char] > 1) result++;
//     }
    
//     return result;
// }
    
//    console.log(CountHead());
    
  

// Que 3)  Count the vowels............................................................................

// function Count_vowels(){

//     let name = "Farman ansari";
//     let vowels = "aeiouAEIOU";
//     let count = 0;

//     for(i = 0; i < name.length; i++){
//         if(vowels.includes(name[i].toLowerCase())){
//             count++;
//         }
//     }
//     return count;
// };
// console.log(Count_vowels());


// Que 4) Concatenate the string.......................................................................

// function Add_string(){

// let str1 = "JavaScript is a ";
// let str2 = "most popular language";

// return str1.concat(str2);
// };

// console.log(Add_string());



// Que 5) Find length..................................................................................

// Not used length..........

// let str = "This is a JavaScript";            // First way ..

// function getStringLength(){
//     let i = 0;
//     while(str.indexOf(str[i]) !== -1){
//         i++;
//     }
//     return i;
// }

// console.log(getStringLength());

// Length  used...........

// let str = "Hello world";                // Second way..

// function find_length(){
//     return str.length;
// };

// console.log(find_length());



// Que 6) Find the Winner.............................................................................

// function Game_Winner(S) {
//     let farmanWins = 0; 
//     let sharikWins = 0; 
                
                    
//     for (let char of S) {
//            if (char === 'A') {
//                farmanWins++;

//             } else if (char === 'D') {
//                sharikWins++;
//             }
//        }
   
//        if (farmanWins > sharikWins) {
//            return "farman";

//         } else if (sharikWins > farmanWins) {
//            return "sharik";

//         } else {
//            return "Draw";
//         }
//     }
//         console.log(Game_Winner("FFSR")); 


// Que 7) Join string...................................................................................

// function Join_string(S, P){
//     return S + P
// };

// console.log(Join_string("Hello", "World"));



// Que 8) Plaindrome Check.............................................................................

// function Plain_Check(S) {
    
//     S = S.toLowerCase();
    
  
//     let reversed = S.split('').reverse().join('');
    
    
//     return S === reversed;
// }
//     console.log(Plain_Check("naman"));   
//     console.log(Plain_Check("Naman"));     
//     console.log(Plain_Check("Hello"));   



// Que 9) Reverse the string............................................................................

// function Reverse_String(){                       
//     let res = str.split('').reverse().join('');
//     return res;
// };

// let str = "Hello World";
// console.log(Reverse_String());



// Que 10) Match the string............................................................................

// function Match_String(){
//     let a = "5";
//     let b = "6";

//     if(a<b){
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     };
// };

//  console.log(Match_String());             // Not proper accessible..
// Match_String();



// Que 11) Replace string...............................................................................

// let str = "Hello world!!!   this is a JavaScript";

// function Replace_String(){

//     return str.replace("world","farman");
// };

// console.log(Replace_String());



// Que 12) Split the string.............................................................................


// function Split_the_string(S){

//     return S.split('');
// };

// console.log(Split_the_string("I am developer"));



// Que 13) Count the Vowels and Consonant..............................................................

// function Count_Vowels(S){

//     let vowels = "aeiouAEIOU";
//     let count = 0;

//     for(let char of S){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }

// function Count_Consonant(S){
//     let vowels = "aeiouAEIOU";
//     let count = 0;

//     for(let char of S){

//         if(char.match(/[a-zA]/) && ! vowels.includes(char)){

//             count++;
//         }
//     }
//     return count;
// }

// let textString = "Hello World !!!"

// console.log(Count_Consonant(textString));
// console.log(Count_Consonant(textString));
