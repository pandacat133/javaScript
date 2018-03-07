class Square {

    constructor() {
        this.isBomb;
        this.isBlank;
        this.isNumber;
        this.isClicked;
        this.isFlagged;
    }

    toHtml() {
        var squareHtml = '<div class = "square">';

        if (this.isBomb) {
            squareHtml += 'B';
        }

        if (this.isClicked) {
            squareHtml += 'C';
        }

        if (this.isFlagged) {
            squareHtml += 'F';
        }
        else {
            squareHtml += ' ';
        }

        squareHtml += '</div>';

        return squareHtml;
    }
}

class GameBoard {

    constructor(columns, rows) {
        this.numBombs = 10;
        this.columns = columns;
        this.rows = rows;
        this.gameGrid = [];

        for (let row = 0; row < this.rows; row ++) {
            let ourNewRow = [];

            for (let col = 0; col < this.columns; col ++) {
                ourNewRow.push(new Square());
            }
            this.gameGrid.push(ourNewRow);
        }
    }
}

function getBoardHtmls(gameBoard) {
    var boardHtml = '<div class = "gameBoard" id = "gameBoard">';

    for (let row = 0; row < gameBoard.rows; row++) {
        let currRow = gameBoard[row];
        boardHtml += '<div class = "gridRow">'

        for (let col = 0; col < gameBoard.columns; col++) {
            let currSquare = gameBoard.gameGrid[row][col];
            boardHtml += currSquare.toHtml();
        }

        boardHtml += '</div>';
    }

    boardHtml += '</div>';
    return boardHtml;
}

var testBoard = new GameBoard(10, 10);
var boardHtml = getBoardHtmls(testBoard);
document.getElementById('gameBoard').innerHTML = boardHtml;