function prepend(someString) {
    return ('hello ' + someString);
}

function evens(array) {
    let evens = [];

    for (let i = 0; i < array.length; i++ ) {
        if (array[i] % 2 === 0) {
            evens.push(array[i]);
        }
    }
    return evens;
}

function search(nameList, searchTerm) {
    let results = [];

    for (let i = 0; i < nameList.length; i++) {
        let currWord = nameList[i].toLowerCase();

        if (currWord.indexOf(searchTerm.toLowerCase()) >= 0) {
            results.push(nameList[i]);
        }
    }
    return results;
}

function pascal(row, col) {
    if (row <= 2 || col <= 1 || row === col) {
        return 1;
    }
    return pascal(row - 1, col - 1) + pascal(row - 1, col);
}

class Stereo {
    constructor(brand, bluetooth) {
        this.brand = brand;
        this.bluetooth = bluetooth;
        this.status = 'off';
    }

    pushPowerButton() {
        if (this.status === 'on') {
            this.status = 'off';
        }
        else {
            this.status = 'on';
        }
    }
}

class Vehicle {
    constructor(make, model, color, stereo) {
        this.make = make;
        this.model = model;
        this.color = color;

        if (stereo) {
            this.stereo = stereo;
        }
        else {
            this.stereo = new Stereo('stock',false);
        }
    }

    setColor(color) {
        this.color = color;
    }

    pushStereoPowerButton(){
        this.stereo.pushPowerButton();
    }
}