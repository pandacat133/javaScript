class Vehicle {

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.currentSpeed = 0;
    }

    toString() {
        return this.year + ' ' + this.make + ' ' + this.model;
    }

    setSpeed(speed) {
        this.currentSpeed = speed;
    }

    stop() {
        this.currentSpeed = 0;
    }
}

class Stereo {
    constructor() {
        this.type = 'stock';
    }
}

class Car extends Vehicle {
    constructor(make, model, year, hasSpoiler) {
        super(make, model, year);

        this.hasSpoiler = hasSpoiler || false;
        this.trunkStatus = 'closed';
        this.stereo = new Stereo();
    }

    closeTrunk() {
        this.trunkStatus = 'closed';
    }

    openTrunk() {
        this.trunkStatus = 'open';
    }
}

class Truck extends Vehicle {

    constructor(make, model, year, bedLength) {
        super(make, model, year);

        this.bedLength = bedLength || 7;
        this.tailGateStatus = 'closed';
        this.stereo = new Stereo();
    }

    lowerTailGate() {
        this.tailGateStatus = 'open';
    }

    closeTailGate() {
        this.tailGateStatus = 'closed';
    }
}