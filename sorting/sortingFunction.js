// Split the array into halves and merge them recursively 
function mergeSort (arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
  const left = arr.slice(0, middle); // items on the left side
  const right = arr.slice(middle); // items on the right side

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++
    } else {
      result.push(right[indexRight]);
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

function insertionSort (items) {
  for (var i = 0; i < items.length; i++) {
    let value = items[i];
    
    // store the current item value so it can be placed right
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      
      // loop through the items in the sorted array (the items from the current to the beginning)
      // copy each item to the next one
      items[j + 1] = items[j]
    }
    
    // the last item we've reached should now hold the value of the currently sorted item
    items[j + 1] = value
  }

  return items
}

function sortList(list, algorithm) {
  let d = new Date();
  let start = d.getTime();

  algorithm(list);
  
  d = new Date();
  let end = d.getTime();
  let sortingTime = end - start;
  
  console.log(`took ${sortingTime} milliseconds to sort`);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var smallArray = [];
var bigArray = [];
var colossalArray = [];

console.log('populating arrays...');
for (let i = 0; i < 100; i++) {
  smallArray.push(getRandomInt(100));
}
for (let i = 0; i < 100000; i++) {
  bigArray.push(getRandomInt(10000));
}
for (let i = 0; i < 1000000; i++) {
  colossalArray.push(getRandomInt(1000000));
}

var runTime;
// Small Array
console.log('sorting small Array with insertionSort');
runTime = sortList(smallArray, insertionSort);

console.log('sorting small Array with mergeSort');
runTime = sortList(smallArray, mergeSort);

// Big Array
console.log('\nsorting big Array with insertionSort');
runTime = sortList(bigArray, insertionSort);

console.log('sorting big Array with mergeSort');
runTime = sortList(bigArray, mergeSort);

// Colossal Array
console.log('\nsorting colossal Array with insertionSort');
runTime = sortList(colossalArray, insertionSort);

console.log('sorting colossal Array with mergeSort');
runTime = sortList(colossalArray, mergeSort);