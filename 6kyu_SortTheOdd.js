// 6 kyu - Sort the Odd

// Description:

// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
  var odd = array.filter((x) => x % 2).sort((a,b) => a - b);

  return array.map((x) => x % 2 ? odd.shift() : x);
}


console.log(sortArray([5, 3, 2, 8, 1, 4])); // [ 1, 3, 2, 8, 5, 4 ]
console.log(sortArray([5, 3, 1, 8, 0])); // [ 1, 3, 5, 8, 0 ]
