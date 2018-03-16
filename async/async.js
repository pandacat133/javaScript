var thingService = new ThingService();

var promise = function () {
    thingService.sometimesFail()
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error);
        });
};

promise();

var otherPromise = function () {
    thingService.getPeopleList()
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error);
        });
};

otherPromise();