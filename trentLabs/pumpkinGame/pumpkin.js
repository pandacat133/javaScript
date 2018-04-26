// JavaScript Document

var gametitle = "Pumpkin Game";
var pumpkinpatch = "";
var numpumpkins = 0;

document.getElementById("title").innerHTML = gametitle;

function addPumpkin(event) {

    let randomPumpkin = Math.floor((Math.random() * 4) + 1);

	let xAdjust = 360;
    let yAdjust = 8;

	let x = event.clientX - xAdjust;
    let y = event.clientY + yAdjust;

	pumpkinpatch += "<div class='pumpkin" + randomPumpkin + "' style='left: " + x + "px; top:" + y + "px;'></div>";
    document.getElementById("container").innerHTML = pumpkinpatch;

    numpumpkins++;
    document.getElementById("numbertitle").innerHTML = numpumpkins;

}

$("#container").mousemove(function(e){
      $('.follow').css({'top': e.clientY + 20, 'left': e.clientX - 50});
});