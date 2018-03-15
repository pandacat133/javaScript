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