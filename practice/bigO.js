// This function be denoted at O(1), because no matter how big the input gets
// the execution time of the function is constant
function printFirstItem(array) {
    console.log(array[0]);
}

// When you add loops to your function, the big O increases more quickly
// This function run in O(n).  If we have 1000 items, we have to print
// 1000 times
function printAllItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// Here is an example of a more complex function with two loops.  When there are
// multiple loops, the time complexity increases dramatically.
function nestedLoops(array1, array2) {
    // Assuming the arrays are the same size
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            console.log(i,j);
        }
    }
}