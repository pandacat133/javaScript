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

        return fib(n-1) + fib(n-2);
    }

    let fibonacciAnswer = fib(5);
    console.log(fibonacciAnswer);

    //factorials

    function fac(b) {
        if (b <= 0) {
            return 1;
        }
        else {
            return (b * fac(b - 1));
        }
    }

    let factorialAnswer = fac(5);
    console.log(factorialAnswer);

    //pascal's triangle

    function pascal(row, col) {
        if (row <= 2 || col <= 1 || row === col) {
            return 1;
        }
        return pascal(row -1, col -1) + pascal(row - 1, col);
    }