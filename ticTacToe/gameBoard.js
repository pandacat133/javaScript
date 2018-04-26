class GameBoard {
    constructor() {
        this.boardArray = [['','',''],['','',''],['','','']];
    }

    markSquare(marker, row, col) {
        if (this.boardArray[row][col] !== '') {
            return false;
        }

        this.boardArray[row][col] = marker;
        return true;
    }

    getSquareValue(row, col) {
        return this.boardArray[row][col];
    }

    checkForWinner(marker) {
        console.log('checkForWinner not implemented yet');
        return false;
    }

    boardIsFull() {
        for (let row = 0; row < this.boardArray.length; row++) {
            for (let col = 0; col < this.boardArray[row].length; col++) {
                if (this.boardArray[row][col] === '') {
                    return true;
                }
            }
        }

        return false;
    }
}