// 6kyu - Simple Fun #217 : Sort By Guide

// #Task You're given an array of positive integers arr, and an array guide of the 
// same length. Sort array arr using array guide by the following rules:

// if guide[i] = -1, arr[i] shouldn't be sorted;
// if guide[i] ≠ -1, arr[i] should be sorted, 
//    and among all elements that should be sorted, 
//    arr[i] should be the ith one (1-based).
// #Input/Output
// [input] integer array arr

// Array of positive integers.

// 1 ≤ a.length ≤ 100

// 1 ≤ A[i] ≤ 10^4
// [input] integer array guide

// It is guaranteed that guide.length = a.length.
// [output] an integer array

// Array sorted as described above.
// #Example

// For

// arr = [56, 78, 3, 45, 4, 66, 2, 2, 4]

// guide = [3, 1, -1, -1, 2, -1, 4, -1, 5]

// the output should be [78,4,3,45,56,66,2,2,4]

// Here's how a was sorted:

// Elements 3, 45, 66 and 2 don't need to be sorted, 
// so we can put them in the resulting array right away:
// [?, ?, 3, 45, ?, 66, ?, 2, ?].
// Now we need to sort the remaining elements. 
// According to the guide, 
// they should be sorted in the following order:
// [78, 4, 56, 2, 4]
// Thus, the final answer is:
// [78, 4, 3, 45, 56, 66, 2, 2, 4].

function sortByGuide(arr, guide) {
   var temp = [];
       num = guide.filter(a => a !== -1).sort((a, b) => a - b);
       for(var i = 0; i < num.length; i++){
         temp.push(arr[guide.indexOf(num[i])]);
       }
       return arr.map((a, i) => (guide[i] !== -1) ? temp.shift() : a);
}
console.log(sortByGuide([56, 78, 3, 45, 4, 66, 2, 2, 4],[3, 1, -1, -1, 2, -1, 4, -1, 5])); // 
console.log(sortByGuide([45, 56, 78],[-1, 2, 1])); // 
console.log(sortByGuide([2, 5, 3, 1, 4, 70, 8],[2, 5, 1, 3, -1, 4, -1])); // 
console.log(sortByGuide([700, 800, 400, 100, 900, 325],[2, -1, 1, -1, 3, -1])); // 
console.log(sortByGuide([70, 10, 15, 800, 400, 4, 225, 438, 509, 1000],[6, 1, 4, -1, -1, 2, -1, -1, 5, 3])); // 
console.log(sortByGuide([27, 67, 80, 38, 21], [2, 5, 3, 1, 4])); // 
