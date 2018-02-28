function getListHtml(array) {

    var html = '<ul>';

    for(let i = 0; i < cars.length; i++) {
        html += '<li>' + cars[i] + '</li>';
    }

    html += '</ul>';

    return html;

}

var cars = ['BMW', 'Ford', 'Hyundai', 'Honda'];

document.getElementById('cars1').innerHTML = getListHtml(cars);

cars.push('Volvo');

document.getElementById('cars2').innerHTML = getListHtml(cars);

cars[0] = 'Tesla';

document.getElementById('cars3').innerHTML = getListHtml(cars);

document.getElementById('length').innerHTML = cars.length;

cars[cars.length] = 'Chevy';

document.getElementById('cars4').innerHTML = getListHtml(cars);

//2D array example

let twoDarray = [['a', 'b'], ['c', 'd'], ['e', 'f']];

for (let x = 0; x < twoDarray.length; x++){

    let currentArray = twoDarray[x];

    for (let y = 0; y < currentArray.length; y++){
        console.log(currentArray[y])
    }
}