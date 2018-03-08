// fun little "draggable" function just as an example.
// $(".introBtn").draggable();

var Menu = function () {

    this.stopMusic = function () {
        bgMusic.pause();
    };

    this.playGame = function () {

    };

    this.addWords = function () {

    };
};

var Reflector = function (obj) {

    var methods = [];

    for (var method in obj) {
        if (typeof obj[method] === "function") {
            methods.push(method);
        }
    }
    return methods;
};

var myMenu = new Menu();
var mirror = new Reflector(myMenu);

let bgMusic = new Audio("sounds/goat.mp3");
bgMusic.play();

$(".introBtn").click(function () {
    //fire when click occurs
    $(".intro").hide();
    $(".menuPage").show();

    var menuArray = mirror;

    for(var i = 0; i < menuArray.length; i++) {
        $(".btnContainer").append("<a class='menuBtns' href='javascript: myMenu."
            + menuArray[i] + "()'>" + menuArray[i] + "</a>")
    }
});