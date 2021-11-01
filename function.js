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
