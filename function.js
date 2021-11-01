// JS Functions

/* Before Start of Exercise we have create a Function called PrintNewLine before start of every Exercise */

const printNewLine = function (question) {
  console.log(
    `\n<--------------------Answer JS Function ${question}----------------->\n\n`
  );
};
printNewLine("Exercise 1");

/* EXERCISE 1
    Write a function called dice; it should randomize an integer number between 1 and 6.
*/
const dice = function () {
  return Math.ceil(Math.random() * 6);
};
console.log(dice());

/* EXERCISE 2
    Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/
printNewLine("Exercise 2");
const whoIsBigger = function (num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
};
console.log(whoIsBigger(40, 30));

/* EXERCISE 3
    Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
    Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

printNewLine("Exercise 3");

const splitMe = function (string) {
  return string.split(" ");
};
console.log(splitMe("I Love Coding"));

/* EXERCISE 4
    Write a function called deleteOne which receives a string and a boolean as parameters.
    If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
printNewLine("Exercise 4");
const deleteOne = function (string1, boolean) {
  return boolean === true
    ? string1.slice(1)
    : string1.substr(0, string1.length - 1);
};
console.log(deleteOne("I am Javaid", false));

/* EXERCISE 5
   Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs") => returns "I have  dogs"
*/
printNewLine("Exercise 5");
const onlyLetters = function (string3) {
  let arrayOfStringElements = string3.split("");
  for (let i = 0; i < arrayOfStringElements.length; i++) {
    if (!isNaN(arrayOfStringElements[i])) {
      arrayOfStringElements[i] = " ";
    }
  }
  console.log(arrayOfStringElements.join(""));
};

onlyLetters("I have 4 dogs");

/* EXERCISE 6
   Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
*/

printNewLine("Exercise 6");

const isThisAnEmail = function (string4) {
  let splitStr = string4.split("");
  let at = "@";
  let dot = ".";
  if (splitStr.includes(at) && splitStr.includes(dot)) {
    return true;
  } else {
    return `${string4} is not a valid email address.`;
  }
};

console.log(isThisAnEmail("javaidgmail.com"));

/* EXERCISE 7
   Write a function called whatDayIsIt that should return the current day of the week.
*/
printNewLine("Exercise 7");

const whatDayIsIt = function () {
  let today = new Date().getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(days[today]);
};

whatDayIsIt();
