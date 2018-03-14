//JS callback

window.setTimeout(
    function () {
        console.log('Timeout has elapsed');
    },
    Math.random() * 2000 + 1000
);

console.log ('I am doing stuff before the timeout is done');

//Async Capitalize function

function capAsync(anArray, callback) {
    window.setTimeout(
        function () {
            let capitalizedString = anArray.toString().toUpperCase();
            callback(capitalizedString);
        },
        Math.random() * 2000 + 1000
    );
    console.log('Doing some other stuff in capAsync');
}

capAsync(
    ['hello','world','how','are','you'],
    function () {
        console.log('Done capitalizing stuff')
    }
);

function handleModifiedArray(modifiedArrayStr) {
    document.getElementById('modified-array').innerText = modifiedArrayStr;
}

wordArray = ['this','is','sparta'];
let newCoolStr = capAsync(wordArray,handleModifiedArray);

//Promises

// We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)

var promise =new Promise(
    // The resolver function is called with the ability to resolve or
    // reject the promise
    function(resolve, reject){
        log.insertAdjacentHTML('beforeend', thisPromiseCount +
            ') Promise started (<small>Async code started</small>)<br/>');
        // This is only an example to create asynchronism
        window.setTimeout(
            function(){
            // We fulfill the promise!
            resolve(thisPromiseCount);
            }, Math.random()*2000+1000);
    }
);

//javascript callback pyramid of doom ---> this works but promises ^^^ are better!

// doSomething(function (result) {
//     doSomethingElse(result, function (newResult) {
//         doThirdThing(newResult, function (finalResult) {
//             console.log('Got the final result: ' + finalResult);
//         }, failureCallback);
//     },failureCallback);
// },failureCallback);

//homework

// Create an Async function that converts the first letter of every string in an array into Upper case.
    // -Must use a call back
    // -Must set a timeout to simulate async behavior
    // -Must rewrite using promises
// Take Home: Create a similar function that returns the strings in the array in alphabetical order