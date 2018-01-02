// 6 kyu - Simple Fun #79: Delete a Digit
// Description:

// Task

// Given an integer n, find the maximal number you can obtain by deleting exactly one 
// digit of the given number.
// Example

// For n = 152, the output should be 52;
// For n = 1001, the output should be 101.
// Input/Output

// [input] integer n
// Constraints: 10 ≤ n ≤ 1000000.
// [output] an integer


function deleteDigit(n) {
  var num = [];
  n = String(n);
  var Max = 0;
  for (var i = 0; i < n.length; i++) {
    if(Max < n.replace(n[i], '')){
      Max = n.replace(n[i], '');
    }
  }
  return Number(Max);

}
// function deleteDigit(n) {
//   var num = [];
//   n = (n+'');
  
//   for (var i = 0; i < n.length; i++) {
//     num.push(n.replace(n[i], ''));
//   }
//   return Math.max(...num);
// }
console.log(deleteDigit(152)); // 52
console.log(deleteDigit(1001)); // 101
console.log(deleteDigit(10)); // 1
console.log(deleteDigit(189)); // 89
