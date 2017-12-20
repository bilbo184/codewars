// 6kyu - Highest Scoring Word

// Given a string of words (x), you need to find the highest scoring word.

// Each letter of a word scores points according to it's position in the alphabet. 
// a=1, z=26 and everything inbetween.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lower case and all inputs will be valid.

function high(x) {
  x = x.split(' ');
  var max = 0;
  var word = '';
  for(var i = 0; i < x.length; i++){
    // var temp = x[i].length ? x[i].split("").map(a => a.charCodeAt(0)-96).reduce((a,b) => a + b)
    // : x[i].charCodeAt(0);
     var temp = x[i].length ? x[i].split('').map(function(a){
       return  a.charCodeAt()-96;
     }).reduce(function(a, b){
       return  a+ b;
     }) : x[i].charCodeAt();

  if(temp > max){
    word = x[i];
    max = temp;
  }
  }
  return word;
}
 
console.log(high('man i need a taxi up to ubud')); // 'taxi'
console.log(high('what time are we climbing up the volcano')); // 'volcano'
console.log(high('take me to semynak')); // 'semynak'
