function addition(){
    let boxOne = document.getElementById('numberOne').value;
    let boxTwo = document.getElementById('numberTwo').value;
    var finalAnswer = runThis(boxOne, boxTwo);

    document.getElementById('answer').innerHTML = finalAnswer;
}

function runThis(valueOne, valueTwo) {
    return Number(valueOne) + Number(valueTwo);
}

function makeIterator(array) {
    var nextIndex = 0;

    return {
        next: function() {
            return nextIndex < array.length ?
                {value: array[nextIndex++], done: false} :
                {done: true};
        }
    }
}

var it = makeIterator(['yo', 'ya']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);