function checkMonth() {
    var myUserInput = document.getElementById('userInput').value;
    var myOutput = document.getElementById('output');

    switch(myUserInput){
        case 'Jan':
            myOutput.innerHTML = 'Aquarius';
            break;

        case 'Feb':
            myOutput.innerHTML = 'Pisces';
            break;

        case 'Mar':
            myOutput.innerHTML = 'Aries';
            break;

        case 'Apr':
            myOutput.innerHTML = 'Taurus';
            break;

        case 'May':
            myOutput.innerHTML = 'Gemini';
            break;

        case 'Jun':
            myOutput.innerHTML = 'Cancer';
            break;

        case 'Jul':
            myOutput.innerHTML = 'Leo';
            break;

        case 'Aug':
            myOutput.innerHTML = 'Virgo';
            break;

        case 'Sep':
            myOutput.innerHTML = 'Libra';
            break;

        case 'Oct':
            myOutput.innerHTML = 'Scorpio';
            break;

        case 'Nov':
            myOutput.innerHTML = 'Sagittarius';
            break;

        case 'Dec':
            myOutput.innerHTML = 'Capricorn';
            break;

        default:
            myOutput.innerHTML = 'Please type a three letter month.';
    }
}

var timeNow = new Date;
var hour = timeNow.getHours();
var minutes = timeNow.getMinutes();
var today = timeNow.getDay();
console.log(hour + ':' + minutes);

function checkDay() {
    var day = document.getElementById('day');
    var photo = document.getElementById('photo');
    var quote = document.getElementById('quote');

    switch (today) {
        case 0:
            day.innerHTML = 'Sunday';
            photo.innerHTML = '<img src="img/cat.jpg">';
            quote.innerHTML = 'If I won the award for laziness, I would send somebody to pick it up for me.';
            break;

        case 1:
            day.innerHTML = 'Monday';
            photo.innerHTML = '<img src="img/cat.jpg">';
            quote.innerHTML = 'If Cinderella\'s shoe fit perfectly, then why did it fall off?';
            break;

        case 2:
            day.innerHTML = 'Tuesday';
            photo.innerHTML = '<img src="img/cat.jpg">';
            quote.innerHTML = 'Never let your best friends get lonely... keep disturbing them.';
            break;

        case 3:
            day.innerHTML = 'Wednesday';
            photo.innerHTML = '<img src="img/cat.jpg">';
            quote.innerHTML = 'A best friend is like a four leaf clover, hard to find, lucky to have.';
            break;

        case 4:
            day.innerHTML = 'Thursday';
            photo.innerHTML = '<img src="img/cat.jpg">';
            quote.innerHTML = 'Some people are like clouds. When they go away, it\'s a brighter day.';
            break;

        case 5:
            day.innerHTML = 'Friday';
            photo.innerHTML = '<img src="img/cat.jpg">';
            quote.innerHTML = 'My bed is a magical place where I suddenly remember everything I forgot to do.';
            break;

        case 6:
            day.innerHTML = 'Saturday';
            photo.innerHTML = '<img src="img/cat.jpg">';
            quote.innerHTML = 'If we shouldn\'t eat at night, why is there a light in the fridge?';
            break;
    }
}