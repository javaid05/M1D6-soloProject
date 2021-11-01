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
