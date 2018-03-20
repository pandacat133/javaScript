function handleSubmission(data) {
    try {
        validateSubmission(data);
    }
    catch(error) {
        console.log('we gracefully handled the following error: ' + error);
    }
}

function validateSubmission(data) {
    if(data == " ") throw "data is empty";
    if(data == undefined) throw "data is undefined";
    if(data == null) throw "data is null";
}

// -----------------------------------------------------------------------

function sendToBackEnd(data) {
    var connection = new WebSocketConnection('backendUrl1');
    try {
        connection.open();
        connection.send(data); //this can throw an error
    }
    catch(error) {
        console.log('we gracefully handled the following error: ' + error)
    }
    finally {
        connection.close(); //error or not, this will get executed
    }
}