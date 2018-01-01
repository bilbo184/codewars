// 6 kyu - Simple Fun #77: Is Beautiful String

// Description:

// Task

// A string is said to be beautiful if "b" occurs in it no more times than 
// "a"; "c" occurs in it no more times than "b"; etc.

// Given a string s, check whether it is beautiful.
// Example

// For s = "bbbaacdafe", the output should be true;

// a   b   c   d   e   f   g ...  z
// |   |   |   |   |   |   |      |
// 3 ≥ 3 > 1 ≥ 1 ≥ 1 ≥ 1 > 0 ... ≥0
// It's so beautiful ;-)
// For s = "aabbb", the output should be false;

// a   b   c   d ...  z
// |   |   |   |      |
// 2 < 3 > 0 ≥ 0 ... ≥0
// It's not beautiful ;-)
// For s = "bbc", the output should be false.

// a   b   c   d ...  z
// |   |   |   |      |
// 0 < 2 > 1 > 0 ... ≥0
// It's not beautiful ;-)
// Input/Output

// [input] string s

// A string of lowercase letters.

// Constraints: 3 ≤ inputString.length ≤ 50.
// [output] a boolean value


function isBeautifulString(s) {
  var d = [];
  for(var i = 0; i < 26; i++){
    d[i] = 0;
  }
  for(var j = 0; j < s.length; j++){
    d[s.charCodeAt(j)-97]++;
  }
  for(var k = 0; k < 26; k++){
    if(d[k] < d[k+1]){
      return false;
    }
  }
  return true;
}

// function isBeautifulString(s) {
//   const d = []
//   for (let i = 0; i < 26; ++i) d[i] = 0
//   for (let i = 0; i < s.length; ++i) ++d[s.charCodeAt(i) - 97]
//   for (let i = 0; i < 25; ++i) if (d[i] < d[i + 1]) return false
//   return true
// }

console.log(isBeautifulString("bbbaacdafe")); // true
console.log(isBeautifulString("aabbb")); // false
console.log(isBeautifulString("bbc")); // false
console.log(isBeautifulString("bbbaa")); // false
console.log(isBeautifulString("bbbaaa")); // true

