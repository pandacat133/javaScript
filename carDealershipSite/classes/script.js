var vehicleList = [];

function writeToElement(elementId, html) {
    document.getElementById(elementId).innerHTML = html;
}

function setHeaderText(text) {
    document.getElementById('showing-header').innerHTML = text;
}

function getCarListingHtml(car) {
    let hasSpoilerString = (car.hasSpoiler ? 'Yes' : 'No');
    let carHtml = '<div class="vehicle">';
    carHtml += '<div class="vehicle-attribute">Make: ' + car.make + '</div>'
    carHtml += '<div class="vehicle-attribute">Model: ' + car.model + '</div>'
    carHtml += '<div class="vehicle-attribute">Year: ' + car.year + '</div>'
    carHtml += '<div class="vehicle-attribute">Has Spoiler: ' + hasSpoilerString + '</div>'
    carHtml += '<div class="vehicle-attribute">Stereo: ' + car.stereo.type + '</div>'
    carHtml += '</div>';

    return carHtml;
}

function getTruckListingHtml(truck) {
    let truckHtml = '<div class="vehicle">';
    truckHtml += '<div class="vehicle-attribute">Make: ' + truck.make + '</div>'
    truckHtml += '<div class="vehicle-attribute">Model: ' + truck.model + '</div>'
    truckHtml += '<div class="vehicle-attribute">Year: ' + truck.year + '</div>'
    truckHtml += '<div class="vehicle-attribute">Tailgate: ' + truck.tailGateStatus + '</div>'
    truckHtml += '<div class="vehicle-attribute">Stereo: ' + truck.stereo.type + '</div>'
    truckHtml += '</div>';

    return truckHtml;
}

function getListHtml(list) {
    let listHtml = '<div>'

    for (let i = 0; i < list.length; i++) {
        let vehicle = list[i];

        if (vehicle instanceof Car) {
            listHtml += getCarListingHtml(vehicle);
        }
        else if (vehicle instanceof Truck) {
            listHtml += getTruckListingHtml(vehicle);
        }
    }
    listHtml += '</div>'

    return listHtml;
}

function getCarsFromList(list) {
    let cars = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] instanceof Car) {
            cars.push(list[i]);
        }
    }
    return cars;
}

function getTrucksFromList(list) {
    let trucks = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] instanceof Truck) {
            trucks.push(list[i]);
        }
    }
    return trucks;
}

function showList(list) {
    let listHtml = getListHtml(list);
    writeToElement('vehicle-list', listHtml);
}

function showAll() {
    showList(vehicleList);
    setHeaderText('All Vehicles');
}

function showCarsList() {
    let carsList = getCarsFromList(vehicleList);
    showList(carsList);
    setHeaderText('Cars Only');
}

function showTrucksList() {
    let trucksList = getTrucksFromList(vehicleList);
    showList(trucksList);
    setHeaderText('Trucks Only');
}

vehicleList.push(new Car('Toyota', 'Corolla', 2013, false));
vehicleList.push(new Truck('Nissan', 'Titan', 2012));
vehicleList.push(new Car('Nissan', 'Sentra', 2008, false));
vehicleList.push(new Car('Ford', 'Taurus', 2008));
vehicleList.push(new Truck('Dodge', 'Ram 2500', 2012));
vehicleList.push(new Car('Chevy', 'Cobalt', 2007, true));
vehicleList.push(new Truck('Chevy', 'Silverado', 2000));
vehicleList.push(new Car('Chevy', 'Cavalier', 2005));
vehicleList.push(new Car('Volkswagon', 'Passat', 2008));
vehicleList.push(new Truck('Chevy', 'Colorado', 2011, 8));
vehicleList.push(new Car('Chevy', 'Malibu', 2008));
vehicleList.push(new Truck('Ford', 'F250', 2002));
vehicleList.push(new Car('Ford', 'Focus', 2013));
vehicleList.push(new Car('Chevy', 'Camaro', 2015, true));
vehicleList.push(new Truck('Ford', 'F150', 2017, 9));
vehicleList.push(new Truck('Ford', 'F350', 2011));
vehicleList.push(new Truck('Honda', 'Ridgeline', 2009, 6));
vehicleList.push(new Car('Toyota', 'Corolla', 2005, true));
vehicleList.push(new Truck('Dodge', 'Ram 1500', 2005));
vehicleList.push(new Truck('Dodge', 'Ram Promaster', 2017));

showAll();