// 6kyu - Greatest Common Factor of an Array

// Description:

// Write a function that returns the greatest common factor of an array of positive 
// integers. Your return value should be a number, you will only receive positive integers.

// greatestCommonFactor([46, 14, 20, 88]); // --> 2

function gcd(a,b) {
    return (!b) ? a : gcd(b, a%b);
}

// console.log(gcd(1, 8)); // 1
// console.log(gcd(16, 4)); // 4
// console.log(gcd(4, 8)); // 4
// console.log(gcd(468, 156)); // 156
// console.log(gcd(156, 806)); // 26
// console.log(gcd(26, 312)); // 26
// console.log(gcd(312, 442)); // 26

function greatestCommonFactor(arr) {
    return arr.reduce(function(a, b){
      return gcd(a, b);
    });
}

console.log(greatestCommonFactor([1, 8])); // 1
console.log(greatestCommonFactor([16, 4, 8])); // 4
console.log(greatestCommonFactor([46, 14, 20, 88])); // 2
console.log(greatestCommonFactor([468, 156, 806, 312, 442])); // 26
console.log(greatestCommonFactor([48, 99, 18 ])); // 3
console.log(greatestCommonFactor([32, 96, 120, 80])); // 8
console.log(greatestCommonFactor([91, 143, 234, 52])); // 13
console.log(greatestCommonFactor([171, 45, 297, 342])); // 9
