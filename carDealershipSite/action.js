function Vehicle(make, model, year, stereo) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.stereo = stereo;
    this.currentSpeed = 0;
    this.start = function(key) {};
    this.stop = function (key) {};

    this.toString = function() {
        return this.year + ' ' + this.make + ' ' + this.model;
    };

    this.setSpeed = function (speed) {
        this.currentSpeed = speed;
    };

    this.stop = function () {
        this.currentSpeed = 0;
    };
}

function Car(make, model, year, stereo, hasSpoiler) {
    Vehicle.call(this, make, model, year, stereo);

    this.hasSpoiler = hasSpoiler;
    this.trunkStatus = 'closed';

    this.openTrunk = function () {
        this.trunkStatus = 'open';
    };

    this.closeTrunk = function () {
        this.trunkStatus = 'closed';
    };
}

function Truck(make, model, year, stereo, bedLength) {
    Vehicle.call(this, make, model, year, stereo);

    this.bedLength = bedLength;
    this.tailGateStatus = 'closed';

    this.lowerTailGate = function () {
        this.tailGateStatus = 'open';
    };

    this.closeTailGate = function () {
        this.tailGateStatus = 'closed';
    };
}

let car1 = new Car('Honda','Civic', 2015, true, false);
let truck1 = new Truck('Ford', 'F150', 2016, false, 15);

document.write('<div>' + car1 + '</div>');
document.write('<div>' + truck1 + '</div>');