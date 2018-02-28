var squareSideLength = prompt("How long are the sides of your square?");
var triangleSideLength = prompt("How long are the sides of your triangle?");
var diameter = prompt("How long is the diameter of your circle?");
var mass = prompt("How much mass are you (in kg)?");


var squarePerimeter = squareSideLength * 4;

document.write('<div>Wow! The perimeter of your square is: ' + squarePerimeter + '</div>');


var trianglePerimeter = triangleSideLength * 3;

document.write('<div>Wow! The perimeter of your triangle is: ' + trianglePerimeter + '</div>');


var circumference = diameter * 3.14;

document.write('<div>Wow! The circumference of your circle is: ' + circumference + '</div>');


var earth = (mass * 9.798)/4.44;

document.write('<div>Wow! You weigh ' + earth + ' lbs on Earth!</div>');


var moon = (mass * 1.62)/4.44;

document.write('<div>Wow! You weigh ' + moon + ' lbs on the Moon!</div>');


var jupiter = (mass * 24.92)/4.44;

document.write('<div>Wow! You weigh ' + jupiter + ' lbs on Jupiter!</div>');