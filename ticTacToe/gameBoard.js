class GameBoard {
    constructor() {
        this.boardArray= [ ['-','-','-'] , ['-','-','-'] , ['-','-','-'] ];
    }

    getSquareValue(row, col) {
        return this.boardArray[row][col];
    }
}