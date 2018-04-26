const gameStatus = {
    'UNFINISHED': 0,
    'PLAYER1': 1,
    'PLAYER2': 2,
    'TIE': 4
}

class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.player1Marker = 'X';
        this.player2Marker = 'O';
        this.p1Wins = 0;
        this.p2Wins = 0;
        this.ties = 0;
        this.gameBoard = new GameBoard();
        this.playerTurn = 1;
        this.gameStatus = gameStatus.UNFINISHED;
    }

    markSquare(x, y) {
        let marker = this.playerTurn === 1 ? this.player1Marker : this.player2Marker;
        let squareMarked = this.gameBoard.markSquare(marker, x, y);

        if (squareMarked) {
            this.changePlayerTurn();
            this.checkForWinner();
        }
    }

    getSquareValue(x, y) {
        return this.gameBoard.getSquareValue(x, y);
    }

    changePlayerTurn() {
        if (this.playerTurn === 1) {
            this.playerTurn = 2;
        } else if (this.playerTurn === 2) {
            this.playerTurn = 1;
        }
    }

    getPlayerTurn() {
        if (this.playerTurn === 1) {
            return this.player1;
        } else if (this.playerTurn === 2) {
            return this.player2;
        }
    }

    checkForWinner() {
        let player1Win = this.gameBoard.checkForWinner(this.player1Marker);
        let player2Win = this.gameBoard.checkForWinner(this.player2Marker);

        if (player1Win) {
            console.log('player1Win logic not implemented');
        }
        else if (player2Win) {
            console.log('player2Win logic not implemented');
        }
        else if (!player1Win && !player2Win && this.gameBoard.boardIsFull()) {
            this.ties++;
            this.gameStatus = gameStatus.TIE;
        }
    }
}