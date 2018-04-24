class Computer {

    constructor(make, model, driveCapacity) {
        this.make = make;
        this.model = model;
        this.driveCapacity = driveCapacity;
        this.batteryPercent = 100;
        this.status = false;
    }

    getBatteryPercent() {
        return this.batteryPercent + '%';
    }

    getStatus() {
        if(this.status === false) {
            return 'OFF';
        } else if(this.status === true) {
            return 'ON';
        }
    }
}