let linkBlink;
let linkWalkDown;
let backgroundSprite;
let rupee;

function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

Sprite.prototype.draw = function (renderingContext, x, y) {
    renderingContext.drawImage(this.img, this.x, this.y, this.width, this.height, x, y, this.width, this.height);
};

function initSprites(img) {
    // linkSprite = new Sprite(img, 0, 0, 90, 105);

    // linkBlink = [
    //     new Sprite(img, 0, 0, 90, 105),
    //     new Sprite(img, 95, 0, 90, 105),
    //     new Sprite(img, 190, 0, 90, 105)
    // ];

    linkWalkDown = [
        new Sprite(img, 0, 420, 90, 105),
        new Sprite(img, 95, 420, 90, 105),
        new Sprite(img, 190, 420, 90, 105),
        new Sprite(img, 285, 420, 90, 105),
        new Sprite(img, 380, 420, 90, 105),
        new Sprite(img, 475, 420, 90, 105),
        new Sprite(img, 570, 420, 90, 105),
        new Sprite(img, 665, 420, 90, 105),
        new Sprite(img, 760, 420, 90, 105),
        new Sprite(img, 855, 420, 90, 105)
    ];

    backgroundSprite = new Sprite(img, 23, 858, 917, 520);

    rupee = new Sprite(img, 305, 17, 40, 77);
}