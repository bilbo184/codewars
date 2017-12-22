// 6kyu - Numerical Palindrome #3.5

// Description:

// A palindrome is a word, phrase, number, or other sequence of characters which reads 
// the same backward as forward. Examples of numerical palindromes are:

// 2332 
// 110011 
// 54322345

// For a given number num, write a function which returns an array of all the numerical 
// palindromes contained within each number. The array should be sorted in ascending 
// order and any duplicates should be removed.

// For this kata, single digit numbers and numbers which start and end with 0s (such as 
//     010 and 000) will NOT be considered valid numerical palindromes.

// If num contains no valid palindromes, return "No palindromes found". Otherwise, 
// return "Not valid" if the input is not an integer or is less than 0.

// palindrome(1221) => [22,1221]
// palindrome(34322122) => [22,212,343,22122]
// palindrome(1001331) => [33,1001,1331] 
// palindrome(1294) => "No palindromes found"
// palindrome("1221") => "Not valid"

function isPalindrome(num) {
   return (String(+num) === num) ? num === num.split("").reverse().join("") : false;
}

function palindrome(num) {
    if(typeof num !== "number" || num < 0){
      return "Not valid";
      }
    num = String(num);
    var len = 2;
    var arr = [];
    while(len <= num.length){
      for(var i = 0; i <= num.length- len; i++){
        var temp = num.substr(i, len);
        if(Number(temp) !== 0 && isPalindrome(temp) && arr.indexOf(Number(temp)) === -1){
          arr.push(Number(temp));
        }
      }
      len++;
    }
    return arr.length ? arr.sort((a,b) => a - b) : "No palindromes found";

}

    
console.log(palindrome(1221)); // [22,1221]
console.log(palindrome(34322122)); // [22,212,343,22122]
console.log(palindrome(1001331)); // [33,1001,1331]
console.log(palindrome(1294)); // "No palindromes found"
console.log(palindrome("1221")); // "Not valid"

