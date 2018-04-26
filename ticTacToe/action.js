var PLAYER_ENTRY_ELEMENT_ID = 'players';
var GAME_BOARD_ELEMENT_ID = 'game-board';
var PLAYER_ERROR_ELEMENT_ID = 'player-name-error';
var GAME_HEADER_ELEMENT_ID = 'game-header';
var game;

function init() {
    setElementVisibility(PLAYER_ERROR_ELEMENT_ID, false);
    setElementVisibility(GAME_BOARD_ELEMENT_ID, false);
    setElementVisibility(GAME_HEADER_ELEMENT_ID, false);
}

function getPlayer1Name() {
    return document.getElementById('player1Name').value;
}

function getPlayer2Name() {
    return document.getElementById('player2Name').value;
}

function setElementVisibility(elementId, visible) {
    var jqueryElementId = '#' + elementId;
    if (visible) {
        $(jqueryElementId).show();
    } else {
        $(jqueryElementId).hide();
    }
}

function initGameHeader() {
    $('#p1Name').text(game.player1);
    $('#p1Score').text(game.p1Wins);

    $('#p2Name').text(game.player2);
    $('#p2Score').text(game.p2Wins);

    $('#tiesValue').text(game.ties);

    $('#playerTurn').text(game.getPlayerTurn());
}

function updateGameScores() {
    $('#p1Score').text(game.p1Wins);
    $('#p2Score').text(game.p2Wins);
    $('#tiesValue').text(game.ties);
}

function updatePlayerTurn() {
    $('#playerTurn').text(game.getPlayerTurn());
}

function startNewGame() {
    var player1Name = getPlayer1Name();
    var player2Name = getPlayer2Name();

    if (!player1Name || !player2Name) {
        setElementVisibility(PLAYER_ENTRY_ELEMENT_ID, true);
        return;
    } else {
        setElementVisibility(PLAYER_ENTRY_ELEMENT_ID, false);
    }

    game = new Game(player1Name, player2Name);
    initGameHeader();
    drawGameBoard();

    setElementVisibility(GAME_HEADER_ELEMENT_ID, true);
    setElementVisibility(GAME_BOARD_ELEMENT_ID, true);
}

function drawGameBoard() {
    let boardHtml = '';
    for (let row = 0; row < 3; row++) {
        let rowId = 'board-row-' + row;

        boardHtml += '<div class="board-row" id="' + rowId + '">';

        for (let col = 0; col < 3; col++) {
            let id = 'board-' + row + '-' + col
            let squareVal = game.getSquareValue(row, col);
            let clickHandler = 'onClick="squareClick(' + row + ',' + col +')"';
            boardHtml += '<div class="board-square" id="' + id + '" ' + clickHandler + '>' + squareVal + '</div>';
        }

        boardHtml += '</div>'
    }

    $('#game-board').html(boardHtml);
}

function squareClick(col, row) {
    game.markSquare(col, row);

    drawGameBoard();
    updatePlayerTurn();
}

$(document).ready(function() {
    init();
});