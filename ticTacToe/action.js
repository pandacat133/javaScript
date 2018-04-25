var GAME_HEADER_ELEMENT_ID = 'gameHeader';
var PLAYER_ENTRY_ELEMENT_ID = 'players';
var GAME_BOARD_ELEMENT_ID = 'gameBoard';
var game;

function init() {
    setElementVisibility(GAME_HEADER_ELEMENT_ID, false);
    setElementVisibility(GAME_BOARD_ELEMENT_ID, false);
}

function setElementVisibility(elementId, visibility) {
    let jqueryElementId = '#' + elementId;
    if(visible) {
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

function startNewGame() {
    let player1Name = $('#player1NameInput').val();
    let player2Name = $('#player2NameInput').val();

    game = new Game(player1Name, player2Name);

    initGameHeader();
    drawGameBoard();

    setElementVisibility(GAME_HEADER_ELEMENT_ID, true);
    setElementVisibility(GAME_BOARD_ELEMENT_ID, true);
    setElementVisibility(PLAYER_ENTRY_ELEMENT_ID, false);
}

function drawGameBoard() {
    let boardHtml = '';

    for(let row = 0; row < 3; row++) {
        let rowId = 'boardRow' + row;

        boardHtml += '<div class="boardRow" id="'+ rowId +'">';

        for(let col = 0; col < 3; col++) {
            let id = 'board-' + row + '-' + col;
            let clickerHandler = 'onClick ="squareClick(' + row + ',' + col +')"';
            boardHtml += '<div class= "boardSqure" id ="' + id + '" ' + clickerHandler + '>' + squareVal + '</div>';
        }
    }
}

$(document).ready(function() {
    init();
});