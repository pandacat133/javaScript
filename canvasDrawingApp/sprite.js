var canvas;
var blueFill = '#8BE4FD';
var renderingContext;
var width = 600;
var height = 500;
var frames = 0;
var myHero;
var currentState;

var states = {
  Splash: 0,
  Game: 1,
  Score: 2
};

function main() {
    canvasSetup();
    windowSetup();

    document.getElementById('canvasBox').appendChild(canvas);
    myHero = new Hero();

    loadGraphics();
    currentState = states.Game;
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
    this._jumpHeight = 4.6;
    this.jumpCount = 2;
    this.stop = false;

    this.velX = 0;
    this.velY = 0;
    this.maxSpeed = 6;
    this.friction = 0.93;
    this.direction = '';

    this.walkDownAnimation = [0,1,2,3,4,5,6,7,8,9];

    this.jump = function() {
        this.stop = false;
        if(this.jumpCount > 0) {
            this.velocity = -this._jumpHeight;
            this.jumpCount --;
        }
    };

    this.update = function() {
        let n = 5;
        this.frame += frames % n === 0 ? 1:0;
        this.frame %= this.walkDownAnimation.length;

        if(currentState === states.Game) {
            this.updatePlayingHero();
        }
    };

    this.updatePlayingHero = function() {
        if(this.direction === 'left') {
            if(this.velX > -this.maxSpeed) {
                this.velX --;
            }
        }

        if(this.direction === 'right') {
            if(this.velX < this.maxSpeed) {
                this.velX ++;
            }
        }

        if(this.direction === 'down') {
            if(this.velY < this.maxSpeed) {
                this.velY ++;
            }
        }

        if(this.direction === 'up') {
            if(this.velY > -this.maxSpeed) {
                this.velY --;
            }
        }

        this.velX *= this.friction;
        this.x += this.velX;

        this.velY *= this.friction;
        this.y += this.velY;
    };

    this.land = function(place) {
        this.y = place;
        this.jumpCount = 2;
        this.velocity = this._jumpHeight;
    };

    this.draw = function(renderingContext) {
        renderingContext.save();

        let n = this.walkDownAnimation[this.frame];
        linkWalkDown[n].draw(renderingContext, this.x, this.y);

        renderingContext.restore();
    }
}

function windowSetup() {
    document.addEventListener('keydown', myKeyPress);
    document.addEventListener('keyup', removeMotion);
}

function removeMotion() {
    myHero.direction = '';
}

function myKeyPress(event) {
    switch(event.keyCode) {
        case 32:
            myHero.jump();
            break;
        case 37:
            myHero.direction = 'left';
            break;
        case 39:
            myHero.direction = 'right';
            break;
        case 38:
            myHero.direction = 'up';
            break;
        case 40:
            myHero.direction = 'down';
            break;
    }
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
    renderingContext.fillRect(0, 0, width, height);
    myHero.draw(renderingContext);
}