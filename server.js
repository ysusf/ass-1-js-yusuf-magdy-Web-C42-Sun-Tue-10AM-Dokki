// 1- Write a program that allow to user enter number then printitvar

// var number = Number(window.prompt("enter number "));
// document.getElementById("1").innerHTML = "your number is " + number;
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//2 Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no
// var number = Number(window.prompt("enter number "));

// if (number % 3 == 0 && number % 4 == 0) {
//   document.getElementById("1").innerHTML = "no";
// } else {
//   document.getElementById("1").innerHTML = "yes";
// }

//----------------------------------------------------------------------
// -----------------------------------------------------------------------
//  3 Write a program that allows the user to insert 2 integers then print the max
// var number1 = Number(window.prompt("enter number1 "));
// var number2 = Number(window.prompt("enter number2 "));
// if (number1 > number2) {
//   document.getElementById("1").innerHTML = "the max is " + number1;
// } else if (number1 < number2) {
//   document.getElementById("1").innerHTML = "the max is " + number2;
// } else {
//   document.getElementById("1").innerHTML =
//     "both has  the same valu  " + number1 + " = " + number2;
// }

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// 4 Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.
// var number1 = Number(window.prompt("enter number "));

// if (number1 < 0) {
//   document.getElementById("1").innerHTML = "the max is  negative ";
// } else {
//   document.getElementById("1").innerHTML = "the max is  positive  ";
// }

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// 5 Write a program that take 3 integers from user then print the max element
// and the min element.

// ----------------------
// var number1 = Number(window.prompt("enter number 1"));
// var number2 = Number(window.prompt("enter number 2"));
// var number3 = Number(window.prompt("enter number 3 "));

// if (number1 > number2 && number1 > number3) {
//   document.getElementById("1").innerHTML = "the max is  " + number1 + "number1";
// } else if (number2 > number1 && number2 > number3) {
//   document.getElementById("1").innerHTML = "the max is  " + number2 + "number2";
// } else if (number3 > number1 && number3 > number1) {
//   document.getElementById("1").innerHTML = "the max is  " + number3 + "number3";
// } else {
//   document.getElementById("1").innerHTML =
//     "all has  the same valu   " + number3 + "=" + number2 + "=" + number1;
// }
// if (number1 < number2 && number1 < number3) {
//   document.getElementById("2").innerHTML = "the min is  " + number1 + "number1";
// } else if (number2 < number1 && number2 < number3) {
//   document.getElementById("2").innerHTML = "the min is  " + number2 + "number2";
// } else if (number3 < number1 && number3 < number2) {
//   document.getElementById("2").innerHTML = "the min is  " + number3 + "number3";
// } else {
//   document.getElementById("1").innerHTML =
//     "all has  the same valu   " + number3 + "=" + number2 + "=" + number1;
// }
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// 6 Write a program that allows the user to insert integer number then
// check If a number is oven or odd
// --

// var number1 = Number(window.prompt("enter number "));
// if (number1 % 2 == 0) {
//   document.getElementById("2").innerHTML = "even  " + number1;
// } else {
//   document.getElementById("2").innerHTML = "odd  " + number1;
// }
// ------------------------------------------------------------------------
// -7&8 Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant

// var char = window.prompt("enter character ");
// if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
//   // to take  oly char captal and small ***************************************

//   if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//     document.getElementById("2").innerHTML = "Vowel  ";
//   } else if (
//     char == "A" ||
//     char == "E" ||
//     char == "I" ||
//     char == "O" ||
//     char == "U"
//   )
//     document.getElementById("2").innerHTML = "Vowel  ";
//   else document.getElementById("2").innerHTML = "Consonant  ";
// } else document.getElementById("2").innerHTML = "not  Vowel nor Consonan";
// **************************************************************************************************************

// 9
// Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to
// that’s number

// var num = Number(window.prompt("enter number "));

// for (var i = 1; i <= num; i++) {
//   console.log(i);
// }
// ----10 --------------------------------------------------------------------
// Write a program that allows userto insert integerthen print a multiplication table up to 12
// var num = Number(window.prompt("enter number "));
// for (var i = 1; i <= 12; i++) {
//  var result = num * i;
//   console.log(result);
// }

// 11 Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers
// between 1 to this numbe
// var num = Number(window.prompt("enter number "));
// for (var i = 2; i <= num; i += 2) {
//   console.log(i);
// }
// ------------------------------------------------
// 12- Write aprogramthattaketwointegersthenprintthepower
// var number = Number(window.prompt("enter number "));
// var power = Number(window.prompt("enter power"));

// for (i = 0; i <= power; ++i) {
//   var n1 = number * number;
// }
// console.log(n1);
// -------------------------------------------------
// Write a program to enter marks of five subjects and calculate total, average and
// percentage.
// var number1 = Number(window.prompt("enter marks number "));
// var number2 = Number(window.prompt("enter marks number "));
// var number3 = Number(window.prompt("enter marks number "));
// var number4 = Number(window.prompt("enter marks number "));
// var number5 = Number(window.prompt("enter marks number "));

// var total = number1 + number2 + number3 + number4 + number5;
// document.getElementById(1).innerHTML = "total  = " + total;

// var avg = (number1 + number2 + number3 + number4 + number5) / 5;
// document.getElementById(2).innerHTML = "avg =" + avg;

// var percentage =
//   ((number1 + number2 + number3 + number4 + number5) / 500) * 100;
// document.getElementById(3).innerHTML = "percentage  = " + percentage;
// --------------------------------------------------------------------------------------------------
// 13-Write a program to input month number and print number of days in that
// month.

// January - 31 days 1
// February -
// March - 31 days3
// April - 30 days4
// May - 31 days5
// June - 30 days6
// July - 31 days7
// August - 31 days8
// September - 30 days9
// October - 31 days10
// November - 30 days11
// December - 31 days12

// var month = Number(window.prompt("enter month number "));
// if (
//   month == 1 ||
//   month == 3 ||
//   month == 5 ||
//   month == 7 ||
//   month == 8 ||
//   month == 10 ||
//   month == 12
// ) {
//   document.getElementById(2).innerHTML = "number of days in that month =31";
// } else if (month == 2) {
//   document.getElementById(1).innerHTML =
//     "number of days in that month = 28 days in a common year and 29 days in leap years";
// } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//   document.getElementById(3).innerHTML = "number of days in that month =30";
// } else {
//   document.getElementById(3).innerHTML = "not a moth";
// }

// -----------------------------+++++++++++++++++++++++++++++++++++++++++++?
// Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade
// var Physics = Number(window.prompt("enter Physics marks "));
// var Chemistry = Number(window.prompt("enter Chemistry marks"));
// var Biology = Number(window.prompt("enter Biology  marks"));
// var Mathematics = Number(window.prompt("enter Mathematics  marks "));
// var Computer = Number(window.prompt("enter Computer  marks"));
// var percentage =
//   ((Physics + Chemistry + Biology + Mathematics + Computer) / 500) * 100;

// console.log(percentage);

// if (percentage >= 90) {
//   document.getElementById(3).innerHTML = percentage + "%" + "Grad A";
// } else if (percentage >= 80) {
//   document.getElementById(3).innerHTML = percentage + "%" + "Grad B";
// } else if (percentage >= 70) {
//   document.getElementById(3).innerHTML = percentage + "%" + "Grad C";
// } else if (percentage >= 60) {
//   document.getElementById(3).innerHTML = percentage + "%" + "Grad D";
// } else if (percentage >= 40) {
//   document.getElementById(3).innerHTML = percentage + "%" + "Grad E";
// } else {
//   document.getElementById(3).innerHTML = percentage + "%" + "Grad F";
// }
// -----------------------------+++++++++++++++++++++++++++++++++++++++++++?
// -----------------------------+++++++++++++++++++++++++++++++++++++++++++?
// Using switch case*******************************
// 15- Write a program to print total number of days in month
// var month = Number(window.prompt("enter month number "));
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     document.getElementById(2).innerHTML = "number of days in that month =31";
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     document.getElementById(2).innerHTML = "number of days in that month =30";
//     break;
//   case 2:
//     document.getElementById(1).innerHTML =
//       "number of days in that month = 28 days in a common year and 29 days in leap years";
//     break;
//   default:
//     document.getElementById(1).innerHTML = " Invalid month numper  ";
//     break;
// }
// -----------------------------+++++++++++++++++++++++++++++++++++++++++++?
// c
// 16- Write a program to check whether an alphabet is vowel or consonant

// var char = window.prompt("enter character ");

// // char == "A" || char == "E" || char == "I" || char == "O" || char == "U";
// // char == "a" || char == "e" || char == "i" || char == "o" || char == "u";
// switch (char) {
//   case "A":
//   case "E":
//   case "I":
//   case "O":
//   case "U":
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     document.getElementById(1).innerHTML = " vowel ";

//     break;

//   default:
//     document.getElementById(1).innerHTML = "  consonant  ";

//     break;
// }
/////////////////////////////////************************* */
// 17-Write a program to find maximum between two numbers

// var number1 = Number(window.prompt("enter marks number "));
// var number2 = Number(window.prompt("enter marks number2 "));

// switch (true) {
//   case number1 > number2:
//     document.getElementById(1).innerHTML = number1 + " number2 ";

//     break;
//   case number1 < number2:
//     document.getElementById(3).innerHTML = number2 + " number2  ";

//     break;

//   default:
//     document.getElementById(2).innerHTML = "number1 =  number2";

//     break;
// }

//////////////////////
// Write a program to check whether a number is even or odd//////////////////////////////////
// var number1 = Number(window.prompt("enter  number "));

// switch (number1 % 2) {
//   case 0:
//     document.getElementById(3).innerHTML = "Number is Even";

//     break;
//   case 1:
//     document.getElementById(3).innerHTML = "Number is odd";

//     break;
//   default:
//     break;
// }
////////////////////////////////////////////////////////
//////////////////////////////////////////////
// Write a program to check whether a number is positive or negative or zero
// var number1 = Number(window.prompt("enter  number "));

// switch (true) {
//   case number1 > 0:
//     document.getElementById(3).innerHTML = "Number is posive ";

//     break;
//   case number1 < 0:
//     document.getElementById(3).innerHTML = "Number is nigative ";

//     break;
//   case (number1 = 0):
//     document.getElementById(3).innerHTML = "Number is 0 ";

//     break;
//   default:
//     break;
// }
///////////////////////////////////////////
// 20- Write a program to create Simple Calculator

var number1 = Number(window.prompt("enter  number1 "));
let opr = window.prompt("enter opr ");
var number2 = Number(window.prompt("enter  number2 "));

var res;
switch (opr) {
  case "+":
    document.getElementById(3).innerHTML =
      "number1 + number2 = " + (res = number1 + number2);
    break;
  case "-":
    document.getElementById(3).innerHTML =
      "number1 - number2 =" + (res = number1 - number2);
    break;
  case "*":
    document.getElementById(3).innerHTML =
      "number1 * number2 = " + (res = number1 * number2);
    break;
  case "/":
    document.getElementById(3).innerHTML =
      "number1 / number2 = " + (res = number1 / number2);
    break;
  case "%":
    document.getElementById(3).innerHTML =
      "number1 % number2 = " + (res = number1 % number2);
    break;
  default:
    document.getElementById(3).innerHTML = "Invalid operator ";
    break;
}
