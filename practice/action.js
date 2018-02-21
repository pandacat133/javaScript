var num = prompt("Pick a number!");
var fact3 = "Fizz";
var fact5 = "Buzz";
var both = fact3 + fact5;

if (num % 3 === 0) {
    console.log(fact3);
}
if (num % 5 === 0) {
    console.log (fact5);
}
if ((num % 3 && num % 5) === 0) {
    console.log (both);
}
else {
    console.log(num);
}