//nested functions
let function1 = function(a) {
    let returnValue = a + a;
    return a + a;
}

function yourFunction(fn, a) {
    let functionResult = fn(a);
    return fn(a);
}

let result = yourFunction(function1, 'hi');
console.log(result);

//recursive functions

    //fibonacci sequence

    function fib(a) {
        if (a <= 1) {
            return 0;
        }
        if (a === 2) {
            return 1;
        }

        let nMinus1 = fib(a-1);
        let nMinus2 = fib(a-2);

        return nMinus1 + nMinus2;
    }

    let fibonacciAnswer = fib(5);
    console.log(fibonacciAnswer);

    //factorials

    function fac(b) {
        if (b < 0) {
            return -1;
        }
        else if (b === 0) {
            return 1;
        }
        else {
            return (b * fac(b - 1));
        }
    }

    let factorialAnswer = fac(5);
    console.log(factorialAnswer);