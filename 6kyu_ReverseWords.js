// 6 kyu - Reverse Words

// Write a reverseWords function that accepts a string a parameter, and reverses each 
// word in the string. Every space should stay, so you cannot use words from Prelude.

// Example:

// reverse_words("This is an example!") # returns  "sihT si na !elpmaxe"

function reverseWords(str){
  return str.split(' ').map(function(val, i){
    return val.split('').reverse().join('');
  }).join(' ');
}


console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); // 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('apple')); // 'elppa'
console.log(reverseWords('a b c d')); // 'a b c d'
console.log(reverseWords('double  spaced  words')); // 'elbuod  decaps  sdrow'

