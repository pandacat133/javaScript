class Game {
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.p1Wins = 0;
        this.p2Wins = 0;
        this.ties = 0;
        this.gameBoard = new GameBoard();
        this.playerTurn = 1;
    }

    getPlayerTurn() {
        if(this.playerTurn === 1) {
            return this.player1;
        } else {
            return this.player2;
        }
    }

    getSquareValue(row, col) {
        return this.gameBoard.getSquareValue(row, col);
    }
}