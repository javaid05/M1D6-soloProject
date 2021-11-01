/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
- Complete as many exercises as you can
*/

// JS Basics

/* EXERCISE A
   Create a variable called test and assign a string value to it.
*/
const printNewLine = function (question) {
  console.log(
    `\n<--------------------Answer ${question}----------------->\n\n`
  );
};
printNewLine("Exercise A");

let test = "test";
console.log(test);

/* EXERCISE B
    Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/
printNewLine("Exercise B");

let sum = 10 + 20;
console.log("sum between numbers 10 and 20 is:", sum);

/* EXERCISE C
    Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

printNewLine("Exercise C");

let random;
random = Math.floor(Math.random() * 20); //it will print single number at each execution
console.log("Random number at each execution:", random);

/* EXERCISE D
    Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
printNewLine("Exercise D");
let me = {
  name: "Muhammad Javaid",
  surname: "Javaid",
  age: "32",
};
console.log(me);

/* EXERCISE E
    Write a piece of code for programmatically removing the age property from the previously create object.
*/

printNewLine("Exercise E");
delete me.age;
console.log("After deleting the Age", me);

/* EXERCISE F
   Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/
printNewLine("Exercise F");
me.skills = ["HTML, CSS,Basic Js"];
console.log("Adding property of object that created before:", me);
