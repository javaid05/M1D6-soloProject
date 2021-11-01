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

/* EXERCISE 8
    Write a function called rollTheDices which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a sum property holding the sum of all values extracted
    and a values array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
printNewLine("Exercise 8");

/* EXERCISE 9
   Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
*/
printNewLine("Exercise 9");

/* EXERCISE 9
   Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
*/

const howManyDays = function (getDate) {
  let today = Date.now();
  let difference = today - getDate;
  return Math.floor(difference / (1000 * 60 * 60 * 24));
};
console.log(howManyDays(new Date("2021 -01-11")));

/* EXERCISE 10
   Write a function called isTodayMyBirthday which should return true if today's your birthday, false otherwise.
*/

printNewLine("Exercise 10");

const isTodayMyBirthday = function () {
  let todayDate = new Date();
  let currentDay = todayDate.getDate();
  let currentMonth = todayDate.getMonth();
  let myBirthday = new Date("Sep 01, 1986 ");
  let birthdayDay = myBirthday.getDate();
  let birthdayMonth = myBirthday.getMonth();
  return currentDay === birthdayDay && currentMonth === birthdayMonth
    ? true
    : false;
};
console.log(isTodayMyBirthday());
