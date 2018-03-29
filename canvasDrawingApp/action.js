let drawcanvas = document.getElementById("mycanvas");
let ctx =  drawcanvas.getContext("2d");
let shapeArray = [];


drawcanvas.addEventListener("click", onpress);
function onpress(evt) {
    let mouseX = evt.offsetX;
    let mouseY = evt.offsetY;
    console.log(mouseX, mouseY);
    let vertexArray = [mouseX, mouseY];
    shapeArray.push(vertexArray);
    ctx.clearRect(0, 0, drawcanvas.width, drawcanvas.height);
    for(let i = 0; i < shapeArray.length; i++){
        let spotx = shapeArray[i][0];
        let spoty = shapeArray[i][1];
        if(i === 0){
            ctx.beginPath();
            ctx.moveTo(spotx, spoty);
        }
        else{
            ctx.lineTo(spotx, spoty);
        }
    }
    ctx.stroke();
    ctx.fillStyle = "rgba(0,0,0, 0.3)";
    ctx.fill();
}



function closeShape(){
    ctx.clearRect(0, 0, drawcanvas.width, drawcanvas.height);
    for(let i = 0; i < shapeArray.length; i++){
        let spotx = shapeArray[i][0];
        let spoty = shapeArray[i][1];
        if(i === 0){
            ctx.beginPath();
            ctx.moveTo(spotx, spoty);
        }
        else{
            ctx.lineTo(spotx, spoty);
        }
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "rgba(0,0,0, 0.3)";
    ctx.fill();
}