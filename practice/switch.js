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