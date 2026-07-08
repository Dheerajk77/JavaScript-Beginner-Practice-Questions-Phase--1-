// JavaScript Beginner Practice Questions (Phase -1 )

// Console & Basics

// Q1---Print "Hello JavaScript" in the console.
// console.log("Hello JavaScript");

// Q2--Print your name, age, and city using one console.log().
// console.log("My Name is Dheeraj Kumar", "Iam",22,"years old","from Delhi");

// // Q3--Print a warning message using console.warn().
// console.warn("This is your last warning");

// Q4--Print an error message using console.error().
// console.error("Faah Error aa gya");

// Q5--Use console.table() to display an array of 5 numbers.
// console.table([11,12,13,14,15]);

// Variables
// // Q1--Create a variable called studentName and store your name in it.
// var studentName = "Dheeraj";

// Q2--Create a variable age and print it.
// var age = 22;
// console.log(age);

// Q3--Create two variables and swap their values.
// var a = 10;
// var b = a;
// console.log(a)
// console.log(b);

// Q4--Create a constant variable for PI and print it.
// const PI = 3.1458;
// console.log(PI);

// Q5--Declare a variable without assigning a value and print it.
// var a ;
// console.log(a);

// Q6--Create a variable score and increase it by 10.
// var score = 0;
// // score = score+10;
// score +=10;
// console.log(score);

// Q7--Create three variables for first name, last name, and full name.
// var firstName;
// var lastName;
// var fullName;

// Data Types
// Q1--Create variables of type string, number, boolean, null, and undefined.
// var Str = "hello";
// var num = 772005;
// var bool = true;
// var nalla = null;
// var uni = undefined;

// Q2--Check the type of different variables using typeof.
// var Str = "hello";
// var num = 772005;
// var bool = true;
// var nalla = null;
// var uni = undefined;

// console.log(typeof(Str));
// console.log(typeof(num));
// console.log(typeof(bool));
// console.log(typeof(nalla));
// console.log(typeof(uni));

// Q3--Store your mobile number in a variable and check its type.
// var mobile = 1122334455;
// console.log(typeof(mobile));

// Q4--Create a variable with value null and check its type.
// var nalla = null;
// console.log(typeof nalla);

// Q5-- Create a bigint number and print it.
// var badaWalah = 1000000000000000000000000000000000000n;
// console.log(badaWalah);
// console.log(typeof badaWalah);

// Type Conversion & Coercion
// Q1--Convert the string "50" into a number.
// var converter = Number("50");
// console.log(converter);
// console.log(typeof converter);

// Q2--Convert the number 100 into a string.
// console.log(typeof String(100));

// Q3--Convert "true" into a boolean.
// console.log(Boolean("true"));

/* Q4--Check the output of:
    - `"5" + 2`
    - `"5" - 2`
    - `true + 1`
*/
// console.log("5" + 2);
// console.log("5" - 2);
// console.log(true + 1);

// Q5--Create a variable with value "123abc" and convert it into a number.
// var covertable = "123abc";
// console.log(parseInt(covertable));

// Q6--Use parseInt() on "500px".
// var pixels = "500px";
// console.log(parseInt(pixels));

// Operators
// Q1--Add two numbers and print the result.
// var num1 = 10;
// var num2 = 50;
// var result = num1 + num2 ;
// console.log(result);

// Q2--Find the remainder when 25 is divided by 4.
// var num1 = 25;
// var num2 = 4

// var remainder = num1 % num2 ;
// console.log(remainder);

// Q3--Find the square of a number using exponent operator.

// var number = Number(prompt("Enter NUmber"));
// var square = number ** 2;
// console.log("Square is", square);

// Q4--Increment a variable using ++.
// var a = 10;
// a++;
// console.log(a);

// Q5--Decrement a variable using -.
// var a = 50;
// a--;
// console.log(a);

// Q6--Use += operator to increase a variable by 20.
// var a = 50;
// a += 20;
// console.log(a);

// Q7--Compare two numbers using >, <, >=, <=.
// var num1 = 20;
// var num2 = 30;
// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);

// Q8-- Check if two values are strictly equal using ===.

/* var num1 = 700;
var num2 = '700';
console.log(num1 === num2);
*/

// Q9--Compare "10" and 10 using both == and ===.

/* var num1 = "10";
var num2 = 10;
console.log(num1 == num2);
console.log(num1 === num2);
*/

// Q10--Create two boolean variables and test &&, ||, and !.
/* var bool1 = true;
var bool2 = false;
console.log(bool1 && bool2);
console.log(bool1 || bool2);
console.log(!bool1);
console.log(!bool2);
*/

// Conditionals
// Q1--Check whether a number is positive or negative.
/*
var num = Number(prompt("Enter your number"));
if (num > 0){
    console.log("The number",num,"is POSITIVE");
} else {
    console.log("The number",num,"is NEGATIVE");
}
    */

// Q2-- Check whether a number is even or odd.

/*
var num = Number(prompt("Enter your number"));
console.log((num % 2 == 0)? "Even":"ODD");
*/

// Q3--- Check whether a person is eligible to vote.
/*
var age = Number(prompt("Enter Your Age"));
if (age >= 18){
    console.log("You are eligible");
} else {
    console.log("You are not eligible bacche");
}

*/

//Q4 -- Find the largest among two numbers.
/*
var num1 = Number(prompt("enter first number:"));
var num2 = Number(prompt("Enter Second Number:"));
var result = (num1>num2)?`${num1} is larger`:`${num2} is larger`;
console.log(result);
*/

//Q5---Find the largest among three numbers.
/*
var num1 = Number(prompt("Enter first Number"));
var num2 = Number(prompt("enter second number"));
var num3 = Number(prompt("enter third number"));

if(num1 > num2 && num1 >num3){
    console.log(num1,"num1 is largest");
} else if( num2 > num1 && num2 > num3){
    console.log(num2,"num2 is largest");
} else {
    console.log(num3,"num3 is largest");
}
    */

// Q6--Check whether a year is a leap year.
/*
var year = Number(prompt("enter any year"));
if ((year % 4 == 0 && year%100!== 0) || (year % 400 === 0)){
    console.log(year,"is a leap year");
} else{
    console.log(year,"is not leap year");
}
*/

// Q7--- Check whether a number is divisible by both 3 and 5.
/*
var num = Number(prompt("enter number:"));
if (num%3===0  && num%5===0){
    console.log(num,"is divisible by both3 and 5");
} else{
    console.log(num,"is not by both")
}

*/

/* Q8--Create a simple grading system:
- 90+ → A
- 75+ → B
- 50+ → C
- below 50 → Fail
*/

/*
var marks = Number(prompt("Enter your marks"));
if (marks >90){
    console.log("A");
} else if (marks >75){
    console.log("B");
} else if (marks>50){
    console.log("C");
} else{
    console.log("Fail hai laadle tu")
}
*/

// Q9--Check whether a character is a vowel or consonant.
/*
var character = prompt("enter your character for checking");
if (
    character === "a" || character==="A"|| 
    character==="e"|| character==="E"|| 
    character==="i" || character==="I" || 
    character==="o" || character==="O" || 
    character==="u" || character==="u"
){
    console.log(character,"is vowels");
} else{
    console.log(character,"is constants");
}
*/

// Q10:Create a calculator using switch statement.
/*
var num1 = Number(prompt("Enter first number"));
var num2 = Number(prompt("enter second number"));
var operation = prompt("enter operation(+,-,*,/,%,**):");
switch(operation){
    case '+':
        console.log("Addition is",num1+num2);
        break;
    case '-':
        console.log("Subtraction is",num1-num2);
        break;
    case '*':
        console.log("Multiplication is",num1*num2);
        break;
    case '/':
        console.log("Divison is",num1/num2);
        break;
    case '%':
        console.log("Remainder is",num1%num2);
        break;
    case '**':
        console.log("Exponentiation is",num1**num2);
        break;
    default:
        console.log("Invlaid Operations!!!!");
}

*/

// Q11--Print the day name based on a number (1–7).
/*
var dayNumber = Number(prompt("enter day number(1-7):"));
switch(dayNumber){
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid!! You enter number out of range..");
}
*/

// Q12--Check whether a username is "admin" and password is "1234".
/*
var username = prompt("Enter username");
var password = prompt("enter password");
if (username=== 'admin' && password === "1234"){
    console.log("Correct username and password");
} else{
    console.log("incorrect!! You are not the master");
}
*/

// Truthy & Falsy

// Q1--Check whether an empty string is truthy or falsy.
/*
var str = '';
console.log(Boolean(str));
*/

// Q2--Check whether 0 is truthy or falsy.

// var num = 0;
// console.log(Boolean(0));

// if(0){
//     console.log("truthy");
// } else{
//     console.log("falsy");
// }

// Q3--- Check whether [] is truthy or falsy.
/*
if ([]){
    console.log("truthy");
} else{
    console.log("falsy");
}
*/

// Q4---Create a variable and print "Valid" if it has a value otherwise print "Invalid".
// var check = prompt("enter any value");
// if (check){
//     console.log("valid");
// } else {
//     console.log('invalid!!');
// }

// Ternary Operator

// Q1--Check whether a number is even or odd using ternary operator.
// var num = Number(prompt("enter number"));
// var result = (num%2==0)? "Even":"ODD";
// console.log(result);

// Q2---Check whether age is above 18 using ternary operator.
// var age = Number(prompt("enter your age"));
// console.log(age>=18? "above 18+":"below 18");

// Q3--Find the greater number between two values using ternary operator.
// var num1 = Number(prompt("enter first number"));
// var num2  =Number(prompt("enter second number"));
// console.log(num1>num2? `${num1} is greater` : `${num2} is greater`)

// Strings
// Q1--Create a string and print its length.
/*
let str = "Dheeraj";
console.log(str.length);
*/

// Q2--Convert a string into uppercase.
/*
let str = "Dheeraj";
console.log(str.toUpperCase());
*/

// Q3---Convert a string into lowercase.
/*
let str = "Dheeraj";
console.log(str.toLowerCase());
*/

// Q4---Check if a string includes the word "JavaScript".
/*
let str = "Hello JavaScript";
const result = str.includes('JavaScript');
console.log(result);
*/

// Q5--Extract the word "World" from "Hello World".
/*
let str = "Hello World";
console.log(str.slice(6));
*/

// Q6--Replace "apple" with "mango" in a sentence.
/*
let statement = 'I love apple';
console.log(statement.replace("apple",'mango'));
*/

// Q7--Split "HTML,CSS,JS" into an array.
/*
let lan = 'HTML,CSS,JS'
console.log(lan.split(' '));
*/

// Q8--Remove extra spaces from a string.
/*
let str = '     hello     '
console.log(str.trim());
*/

// Q9--Repeat the word "Hi" 5 times.
/*
let word = 'Hi';
console.log(word.repeat(5));
*/

// Q10--Print the first character of a string.
/*
let str = 'Dheeraj';
console.log(str[0]);
console.log(str.charAt(0));
*/

// Q-11 Use template literals to print:"My name is Aman and I am 20 years old"
/*
let naam = 'Aman';
const age = 20
console.log(`My name is ${naam} and I am ${age} years old`);
*/

// Numbers & Math

// Q1-- Round 4.7 using Math.round().
// console.log(Math.round(4.7));

// Q2--Find the square root of 81.
// console.log(Math.sqrt(81));

// Q3--Find the maximum number from 10, 20, 5, 99.
// console.log(Math.max(10, 20, 5, 99));

// Q4--Generate a random number between 1 and 10.
// console.log(Math.floor(Math.random() * ((10-1+1)))+1);

// Q5--Convert "99.99" into an integer.
// console.log(parseInt("99.99"))

// Q6--Check whether 25 is an integer or not.
// console.log(Number.isInteger(25));

// Q7--Use toFixed(2) on 3.141592.
// console.log(3.141592.toFixed(2));

// Mixed Practice Questions

// Q1--Create a mini biodata program using variables and template literals.
/*
let userName = prompt("Enter your name");
const age = Number(prompt('enter your age'));
const city = prompt("enter your city")
console.log(`Hii, My name is ${userName} and I am ${age} year's old. 
I am from ${city}.
`)

*/

// Q2--Calculate the area of a rectangle.
/*
const  length = Number(prompt("enter length:"));
const breadth = Number(prompt('enter breadth'));
let result = length * breadth;
console.log("Area of rectange is :",result);
*/

//Q3--Calculate the simple interest.
/*
const p = Number(prompt("enter principle amount"));
const r = Number(prompt("enter rate of interest"));
const t = Number(prompt("enter time in years"));
let result = (p * r *t)/100;
console.log("Simple Interst is:",result);
*/

// Q4--Convert temperature from Celsius to Fahrenheit.
/*
const C = 33;
let result = (C*9/5)+32;
console.log(result);
*/

//Q5---Convert kilometers into meters.
/*
const kilometers = Number(prompt("enter kilometers to convert"));
let result = kilometers*1000;
console.log(`${kilometers}Km is eual to = ${result}m`);
*/

// Q6--Calculate total marks and percentage of 5 subjects.
/*
const sub1 = Number(prompt("enter marks of subject-1"));
const sub2 = Number(prompt("enter marks of subject-2"));
const sub3 = Number(prompt("enter marks of subject-3"));
const sub4 = Number(prompt("enter marks of subject-4"));
const sub5 = Number(prompt("enter marks of subject-5"));

const totalMarks = sub1 + sub2 + sub3 + sub4 + sub5;
const percentage = (totalMarks/500)*100;
console.log("total marks is:",totalMarks);
console.log("Percentage is:",percentage);
*/

// Q7--Create a username generator using first name and birth year.
/*
let firstName = prompt("enter your name").trim();
const dateOfBirth = Number(prompt("enter year of birth"));
let userName = firstName + dateOfBirth;
console.log("Username is :",userName);
*/

// Q8--Check whether a string starts with a specific letter.

/*
let str = prompt("enter your string:").toLowerCase();
const letter = prompt("which letter to check string start form");
let result = str.startsWith(letter);

if (str) {
  if (result === true) {
    console.log(`yes the given string ${str} start with ${letter}`);
  } else {
    console.log(`Not start with ${letter}`);
  }
} else {
  console.log("Inavlid!!!");
}
*/

// Q9--Count the total characters in a sentence excluding spaces.
/*

let str = prompt('enter your desire string');
const replaced = str.replaceAll(' ','' );
console.log("lenght is",replaced.length);

*/

// Logical Thinking Questions

// Q2---Check whether a number lies between 10 and 50.
/*

const userNumber = Number(prompt("enter your number"))

if (userNumber>10 && userNumber<50){
    console.log(`yes the number ${userNumber} lies between 10 and 50.`);
} else {
    console.log("not lies");
}

*/

// Q3--Check whether a password length is greater than 8.
/*
let userPass = prompt("enter your password");
  if (userPass.length > 8) {
    console.log("your password is strong good");
  } else {
    console.log("password must be minium 8 length");
  }
*/

// Challenge Questions for Beginners

//Q3--Find the last character of a string.

/*
let str = prompt("enter your string").trim();
const totatChar = str.length;
const result = str[totatChar-1];
console.log(result);
 */

// Q4-- Convert a full name into uppercase initials.
// let fullName = "Dheeraj Kumar";
// console.log(fullName.toUpperCase());

// Q2--Reverse a 3-letter string manually.
/*
let letterWord = 'TAC';
for( var i =2; i>=0;i--){
    console.log(letterWord[i]);
}
    */

// Q5--Check whether two strings are equal ignoring case sensitivity.
/*
let str1 = prompt('enter first string').toLocaleUpperCase();
let str2 = prompt('enter first string').toLocaleUpperCase();
if (str1 === str2){
    console.log("both are equal");
} else{
    console.log("not equal");
}
*/

// Q6--Create a simple login validation system.
/*
let userName = prompt("enter username:");
const password = prompt("enter password");
if (userName === 'DJ' && password === 'DJ123'){
    console.log('Welcome, you are verified');
} else{
    console.log('Not verified');
}
    */

// or

/*

let userName = prompt("enter username:");
let password = prompt("enter password");
while (userName !== "DJ" || password !== "DJ123") {
  console.log("Invalid Pass!");
  userName = prompt("enter username:");
  password = prompt("enter password");
}
console.log("welcome , you are verified");


*/

//Q1---Generate a random OTP of 4 digits.
// console.log("4-digit OTP:",Math.floor(Math.random()*1000)+1000);

// Q9--Simulate a traffic light system using switch.

/*

let signal = prompt("enter traffic signal to check").toLowerCase();
switch(signal){
    case 'red':
        console.log("red signal");
        break;
    case "yellow":
        console.log("Yellow signal");
        break;
    case 'green':
        console.log("Go signal is Green");
        break;
    default:
        console.log("Unknown color entered!!!!");
}

*/






// Q8--Create a mini ATM balance checker.

/*
do {
    var PIN = Number(prompt("enter PIN:"));
} while (PIN !== 2005);

console.log("Welcome, Login successful");

let balance = 1000;
let choice;

while (true) {
    choice = Number(prompt(
        "Enter:\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit"
    ));

    if (choice === 1) {
        console.log("Your balance is", balance);

    } else if (choice === 2) {
        let deposit = Number(prompt("Enter amount to deposit"));
        if (deposit > 0) {
            balance += deposit;
            console.log("Amount deposited successfully");
        } else {
            console.log("Amount must be greater than 0");
        }

    } else if (choice === 3) {
        let withdraw = Number(prompt("Enter amount to withdraw"));
        if (withdraw > 0 && withdraw <= balance) {
            balance -= withdraw;
            console.log("Withdrawal successful");
            console.log("Remaining balance", balance);
        } else {
            console.log("Insufficient balance or invalid amount");
        }

    } else if (choice === 4) {
        console.log("Thank you for using ATM");
        break;

    } else {
        console.log("Give correct choice");
    }
}

*/

