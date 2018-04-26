let coinNumber = 10;

loadCoins();

function loadCoins() {
    for(let i = 0; i <= coinNumber; i++) {
        let randomTop = Math.floor(Math.random() * 447 + 1);
        let randomLeft = Math.floor(Math.random() * 470 + 1);

        $('.container').append('<img style="left: '+ randomLeft +'px; top: '+ randomTop +'px" class="coin" src="img/rupee.gif">');
    }
}