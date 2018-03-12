var randomNum = Math.floor(Math.random() * Math.floor(10));
var input = prompt("Guess a number between 1 and 10.");

if (randomNum == input) {
    alert("Well done!");
}
else {
    alert("Wrong, the number was: " + randomNum);
}



var firstNum = prompt("Enter in the first number");
var secondNum = prompt("Enter in the second number");
alert("When multiplying your numbers, I got: " + (firstNum * secondNum));
alert("When dividing your numbers, I got: " + (firstNum / secondNum));



var randomDate = new Date();
alert("Your random date is: " + getDay);