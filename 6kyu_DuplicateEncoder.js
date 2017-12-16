// 6kyu - Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each 
// character in the new string is '(' if that character appears only once in the 
// original string, or ')' if that character appears more than once in the original 
// string. Ignore capitalization when determining if a character is a duplicate.

// Examples:

// "din" => "((("

// "recede" => "()()()"

// "Success" => ")())())"

// "(( @" => "))(("

function duplicateEncode(str){
 str = str.toLowerCase().split('');
  return str.map(function(a){
    return str.indexOf(a) === str.lastIndexOf(a) ? "(" : ")";
  }).join('');
}      


console.log(duplicateEncode("din")); // (((
console.log(duplicateEncode("recede")); // ()()()
console.log(duplicateEncode("Success")); // )())())
console.log(duplicateEncode("(( @")); // ))((

