let color = "red";
let animal = "cat";

var myDiv = document.getElementById("container");

document.getElementById("container").style.backgroundColor = "#845";
document.getElementById("container").style.color = "#236";
document.getElementById("container").style.fontSize = "50px";


for(var i = 0; i < 5; i++){
    myDiv.innerHTML += "<div>Hello</div>";
}

console.log(color, animal);