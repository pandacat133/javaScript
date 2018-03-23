function haveVehicle(vehicleList, make, model) {
    let haveVehicle = false;

    for (let i = 0; i < vehicleList.length; i++) {
        let currVehicle = vehicleList[i];

        if (currVehicle.make === make && currVehicle.model === model) {
            haveVehicle = true;
            break;
        }
    }
    return haveVehicle;
}

function createListItemHtml(name, make, model, available) {
    let availableString = available ? 'Available' : 'Unavailable';
    return '<li>' + name + ' wants a ' + make + ' ' + model + ' ' + ' -- ' + availableString + '</li>';
}

function createUlListHtml(listItemsHtml) {
    let itemsHtmls = '';

    for (let item of listItemsHtml) {
        itemsHtmls += item;
    }
    return '<ul>' + itemsHtmls + '</ul>';
}

var vehicleService = new VehicleService();
var peopleService = new PeopleService();

var peoplePromise = peopleService.getPeopleList();
var carPromise = vehicleService.getCarList();
var truckPromise = vehicleService.getTruckList();

Promise.all([peoplePromise, carPromise, truckPromise])
.then(function (values) {
    let people = values [0];
    let carList = values [1];
    let truckList = values[2];
    let allVehiclesList = carList.concat(truckList);

    let listHtmlItems = [];
    for (let person of people) {
        let vehicleAvailable = haveVehicle(allVehiclesList, person.wantsMake, person.wantsModel);

        let listItemHtml = createListItemHtml(person.name, person.wantsMake, person.wantsModel, vehicleAvailable);

        listHtmlItems.push(listItemHtml);
    }

    let listHtml = createUlListHtml(listHtmlItems);
    document.getElementById('results').innerHTML = listHtml;
});