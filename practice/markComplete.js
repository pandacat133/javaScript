function markComplete(myElement) {
    let myGrandpa = $(myElement).parent().parent();
    $(myGrandpa).toggleClass('complete');
    $(myGrandpa).find('.iconSpot').toggleClass('fa-check');
}

function removeRow(theElement) {
    let myGrandma = $(theElement).parent().parent();

    $(myGrandma).animate({
        opacity: 0,
        left: '+=50'
    }, 400, function () {
        $(myGrandma).remove();
    });
}