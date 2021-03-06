// 6kyu - One Line Task: Makes 10

// Task

// Given two integers a and b in range 1..20, return true if one of them is 
// 10 or if their sum is 10, false otherwise.

// Code Limit

// Less than 36 characters.

// Example
// For a = 1, b = 10, the answer is true.

// Because b is 10.
// For a = 10, b = 1, the answer is true.

// Because a is 10.
// For a = 1, b = 9, the answer is true.

// Because a+b is 10.
// For a = 1, b = 2, the answer is false.

// Because there is no 10.

makes10 = (a, b) => /10/.test([a, b, a+b]);


console.log(makes10(1,10)); // true
console.log(makes10(1,2)); // false
console.log(makes10(10,1)); // true
console.log(makes10(1,11)); // false
console.log(makes10(1,9)); // true
console.log(makes10(11,12)); // false
console.log(makes10(10,10)); // true
console.log(makes10(20,20)); // false

