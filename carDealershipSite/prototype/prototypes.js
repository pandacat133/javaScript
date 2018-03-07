function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.currentSpeed = 0;

    this.toString = function() {
        return this.year + ' ' + this.make + ' ' + this.model;
    }

    this.setSpeed = function(speed) {
        this.currentSpeed = speed;
    }

    this.stop = function() {
        this.currentSpeed = 0;
    }
}

function Stereo() {
    this.type = 'stock';
}

function Car(make, model, year, hasSpoiler) {
    Vehicle.call(this, make, model, year);

    this.hasSpoiler = hasSpoiler || false;
    this.trunkStatus = 'closed';
    this.stereo = new Stereo();

    this.closeTrunk = function() {
        this.trunkStatus = 'closed';
    }

    this.openTrunk = function() {
        this.trunkStatus = 'open';
    }
}

function Truck(make, model, year, bedLength) {
    Vehicle.call(this, make, model, year);

    this.bedLength = bedLength || 7;
    this.tailGateStatus = 'closed';
    this.stereo = new Stereo();

    this.lowerTailGate = function() {
        this.tailGateStatus = 'open';
    }

    this.closeTailGate = function() {
        this.tailGateStatus = 'closed';
    }
}