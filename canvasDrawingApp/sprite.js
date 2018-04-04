var canvas;
var blueFill = '#8BE4FD';
var renderingContext;
var width = 600;
var height = 500;
var frames = 0;
var myHero;

function main() {
    canvasSetup();
    windowSetup();

    document.getElementById('canvasBox').appendChild(canvas);
    myHero = new Hero();

    loadGraphics();
}

function canvasSetup() {
    canvas = document.createElement('canvas');
    canvas.style.border = '2px solid black';

    canvas.width = width;
    canvas.height = height;

    renderingContext = canvas.getContext('2d');
}

function Hero() {
    this.x = 30;
    this.y = 100;
    this.frame = 0;
    this.health = 100;
    this.gravity = 0.25;
    this.velocity = 0;
    this._jump = 4.6;
    // this.blinkAnimation = [0,1,2,1];
    this.walkDownAnimation = [0,1,2,3,4,5,6,7,8,9];

    this.update = function() {
        let n = 5;
        this.frame += frames % n === 0 ? 1:0;
        // this.frame %= this.blinkAnimation.length;
        this.frame %= this.walkDownAnimation.length;
    };

    this.draw = function(renderingContext) {
        renderingContext.save();

        // let n = this.blinkAnimation[this.frame];
        // linkBlink[n].draw(renderingContext, this.x, this.y);

        let n = this.walkDownAnimation[this.frame];
        linkWalkDown[n].draw(renderingContext, this.x, this.y);

        renderingContext.restore();
    }
}

function windowSetup() {

}


function loadGraphics() {
    let img = new Image();
    img.src = 'images/link.png';
    img.onload = function () {
        initSprites(img);
        renderingContext.fillStyle = blueFill;

        gameLoop();
    };
}

function gameLoop() {
    update();
    render();
    window.requestAnimationFrame(gameLoop);
}

function update() {
    //checking status and stuff happening
    frames++;
    myHero.update();
}

function render() {
    //draw stuff constantly based on status
    renderingContext.fillRect(0, 0, width, height);
    // linkBlink[0].draw(renderingContext, 30, 30);
    myHero.draw(renderingContext);
}