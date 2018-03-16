$('.searchBox').keyup(function(e) {

    let incString = $(this).val();

    $('.recipeCardHolder span').each(function(i) {

        let patt = new RegExp(incString);
        let result = patt.test($(this).html());

        //console.log(result);

        if(result === true) {
            console.log($(this));
        }

    });

});