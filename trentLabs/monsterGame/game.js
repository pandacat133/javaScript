// create an array of food items for the monster to eat
var foodarr = ["Snickers", "Three Musketeers", "Smarties", "Tomato", "Apple", "Orange"];
var currentfood = "";

// start the game with a function
function rungame(){
    getfood();
}

// randomly select a food to put in the box
function getfood(){
    var randomfood = Math.floor((Math.random() * foodarr.length) + 0);
    setfood(foodarr[randomfood]);
}

// put the food in the box
function setfood(food){
    currentfood = food;
    document.getElementById("foodbox").innerHTML = food;
}

function eatit(){
    //if the food is good
    if(currentfood == "Snickers" || currentfood == "Three Musketeers" || currentfood == "Smarties"){
        document.getElementById("commentbox").innerHTML = "OMNOMNOMNOMNOM";
    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "BLECHH";
    }
    getfood();
}

function trashit(){
    //if the food is good
    if(currentfood == "Snickers" || currentfood == "Three Musketeers" || currentfood == "Smarties"){
        document.getElementById("commentbox").innerHTML = "Awe man! What a waste!";

    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "Teehee. Good job.";
    }
    getfood();
}