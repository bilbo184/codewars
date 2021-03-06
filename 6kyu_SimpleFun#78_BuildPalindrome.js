// 6kyu - Simple Fun #78: Build Palindrome

// Task

// Given a string str, find the shortest possible string which can be achieved by adding 
// characters to the end of initial string to make it a palindrome.
// Example

// For str = "abcdc", the output should be "abcdcba".
// Input/Output

// [input] string str

// A string consisting of lowercase latin letters.

// Constraints: 3 ≤ str.length ≤ 10.
// [output] a string


function isPalindrome(str){
   return str.split('').reverse().join('') === str;
}

function buildPalindrome(str) {
  var temp = str;
  for(var i = 0; i < str.length; i++){
    console.log(str.slice(0,i));
    temp = str + str.slice(0, i).split('').reverse().join('');
    if(isPalindrome(temp)){
    return temp;
    }
  }
}
console.log(buildPalindrome("baaaacab")); // baaaacabacaaaab
console.log(buildPalindrome("ebgfgfbde")); // ebgfgfbdedbfgfgbe
console.log(buildPalindrome("bca")); // bcacb
console.log(buildPalindrome("abcdc")); // abcdcba
console.log(buildPalindrome("ababab")); // abababa
