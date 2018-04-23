let numberOfHoles = 6;

function addScore(myValue) {
    let tempScore = 0;
    for(let i = 1; i <= numberOfHoles; i++) {
        let inValue = Number($('#p' + myValue + 'h' + i).val());
        tempScore += inValue;
    }

    $('.total' + myValue).html(tempScore);
}

function deletePlayer(playerNum) {
    $('.player' + playerNum).remove();
    for(let i = 1; i <= numberOfHoles; i++) {
        $('#p' + playerNum + 'h' + i).remove();
    }
    $('.total' + playerNum).remove();
}