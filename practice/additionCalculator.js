function addition() {
    let addBoxOne = document.getElementById('addOne').value;
    let addBoxTwo = document.getElementById('addTwo').value;
    let addAnswer = addThis(addBoxOne, addBoxTwo);

    document.getElementById('addAnswer').innerHTML = addAnswer;
}

function subtraction() {
    let subBoxOne = document.getElementById('subOne').value;
    let subBoxTwo = document.getElementById('subtwo').value;
    let subAnswer = subThis(subBoxOne, subBoxTwo);

    document.getElementById('subAnswer').innerHTML = subAnswer;

}

function multiplication() {
    let mulBoxOne = document.getElementById('mulOne').value;
    let mulBoxTwo = document.getElementById('mulTwo').value;
    let mulAnswer = mulThis(mulBoxOne, mulBoxTwo);

    document.getElementById('mulAnswer').innerHTML = mulAnswer;

}

function division() {
    let divBoxOne = document.getElementById('divOne').value;
    let divBoxTwo = document.getElementById('divTwo').value;
    let divAnswer = divThis(divBoxOne, divBoxTwo);

    document.getElementById('divAnswer').innerHTML = divAnswer;

}


function addThis(valueOne, valueTwo) {
    return Number(valueOne) + Number(valueTwo);
}

function subThis(valueOne, valueTwo) {
    return Number(valueOne) - Number(valueTwo);
}

function mulThis(valueOne, valueTwo) {
    return Number(valueOne) * Number(valueTwo);
}

function divThis(valueOne, valueTwo) {
    return (Number(valueOne)) / (Number(valueTwo));
}