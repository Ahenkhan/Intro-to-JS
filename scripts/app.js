// 9 April 2023 chap:1 to 9
// Using Alert
alert("Thank u !")
// Using Variable
var name = "Mark";
name = "Ace";
var nationality;
nationality = "U.S.";
var floogle = "Mark";
// JavaScript's blindness to meaning notwithstanding, when it comes to variable names, you'll want to give your variables meaningful names, because it'll help you and other coders understand your code
var lessonAuthor = "Mark"; 
var guyWhoKeepsSayingHisOwnName = "Mark"; 
var x = "Mark";
var lastName = "Smith"; 
var cityOfOrigin = "New Orleans"; 
var aussieGreeting = "g'Day";
var nickname = "Bub";
// Using varibale for a number
var weight = 150;
weight + 25
var originalNum = 23; 
var newNum = originalNum + 7;
// JavaScript can also handle an expression made up of nothing but variables. 
var originalNum = 23; 
var numToBeAdded = 7; 
var newNum = originalNum + numToBeAdded;
// A variable can be used in calculating its own new value. 
var originalNum = 90; 
originalNum = originalNum + 10; 
// If you enclose a number in quotation marks and add 7... 
var originalNum = "23"; 
var newNum = originalNum + 7;
// it won't work, because JavaScript can't sum a string and a number
var originalNumber = 23; 
var newNumber = originalNumber + 7;
var 1stPresident = "Washington";
var prezWhoCame1st = "Washington";
alert(144);
var caseQty = 144; 
alert(caseQty);
// Variable Names Legal and Illegal
// Math expressions: 
// Familiar operators
var popularNumber = 4;
var popularNumber = 2 + 2;
alert(2 + 2);
var popularNumber = 12 - 24;
var popularNumber = 3 * 12;
var num = 10; 
var popularNumber = num + 200;
var num = 10; 
var anotherNum = 1; 
var popularNumber = num + anotherNum;
var whatsLeftOver = 10 % 3;
var whatsLeftOver = 9 % 3;
// Math expressions: Unfamiliar operators
num++;
num = num + 1;
num--;
var num = 1; 
var newNum = num++;
var num = 1; 
var newNum = ++num;
var num = 1; 
var newNum = num--;
var num = 1; 
var newNum = --num;
// Math expressions: Eliminating ambiguity
var totalCost = 1 + 3 * 4;
var totalCost = 1 + (3 * 4);
var totalCost = (1 + 3) * 4;
var resultOfComputation = (2 * 4) * 4 + 2;
resultOfComputation = ((2 * 4) * 4) + 2;
resultOfComputation = (2 * 4) * (4 + 2);
// Concatenating text strings
var message = "Thanks for your input!"; 
alert(message);
alert("Thanks, " + userName + "!");
var message = "Thanks, "; 
var banger = "!"; 
alert(message + userName + banger);
alert("Thanks, " + "Susan" + "!");
var message = "Thanks, "; 
var userName = "Susan"; 
var banger = "!"; 
var customMess = message + userName + banger; 
alert(customMess);
alert("2" + "2");
alert("2 plus 2 equals " + 2 + 2);
// Prompts
var spec = prompt("Your species?", "human");
var question = "Your species?"; 
var defaultAnswer = "human"; 
var spec = prompt(question, defaultAnswer);
var numberOfCats = prompt("How many cats?"); 
var tooManyCats = numberOfCats + 1;
