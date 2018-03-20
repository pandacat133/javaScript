var minLength = 15;
function valiForm() {
    var message = document.forms['myForm']['myMessage'].value;
    if (message === null || message.trim().length < minLength) {
        alert('message must be filled out');
        return false;
    }
}

var theForm = document.forms.inputStuff;
var theTextBox = theForm.elements['text-box'];
var minLeng = 2;
var textBoxValue = theTextBox.value;

function clearText() {
    theTextBox.value = '';
}


function validateForm() {
    let streetAddress = document.forms['myForm']['streetAddress'].value;
    let city = document.forms['myForm']['city'].value;
    let zip = document.forms['myForm']['zip'].value;
    let state = document.forms['myForm']['state'].value;
    let maxZipLength = 5;
    let maxStateLength = 2;

    if (streetAddress === '') {
        alert ('Street Address must be filled out.');
        return false;
    }

    if (city === '') {
        alert ('City must be filled out.');
        return false;
    }

    if (!isNaN(city)) {
        alert('City must be a string of letters.');
        return false;
    }

    if (zip === '') {
        alert ('Zip Code must be filled out.');
        return false;
    }

    if (isNaN(zip) || zip.trim().length > maxZipLength) {
        alert('Zip code must be 5 digits.');
        return false;
    }

    if (state === '') {
        alert ('State must be filled out.');
        return false;
    }

    if (isNaN(state) || state.trim().length > maxStateLength) {
        return true;
    } else{
        alert('State must be a string of two letters.');
        return false;
    }
}