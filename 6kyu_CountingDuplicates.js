// 6 kyu - Counting Duplicates

// Description:

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphanumeric characters, including digits, uppercase and lowercase alphabets.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabbcdeB" -> 2 # 'a' and 'b'
// "indivisibility" -> 1 # 'i'
// "Indivisibilities" -> 2 # 'i' and 's'
// "aa11" -> 2 # 'a' and '1'

function duplicateCount(str){
  str =  str.toLowerCase().split("").sort().join('').match((/([^])\1+/g) || []);
  return str ===  null ? 0 : str.length;
}

console.log(duplicateCount("")); // 0
console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aabBcde")); // 2
console.log(duplicateCount("Indivisibility")); // 1
console.log(duplicateCount("Indivisibilities")); // 2
