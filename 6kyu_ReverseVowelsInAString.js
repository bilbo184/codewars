// 6 kyu - Reverse Vowels in a String

// Description:

// In this kata, your goal is to write a function which will reverse the vowels in 
// a string. Any characters which are not vowels should remain in their original 
// position. Here are some examples:

// reverseVowels("Hello!"); // "Holle!"
// reverseVowels("Tomatoes"); // "Temotaos"
// reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"

function reverseVowels(str) {
  str = str.split("");
  var vowels = str.filter(function(a){
    return a.match(/[aeiou]/gi);
  });
  for(var i = str.length-1; i >= 0; i--){
    if(str[i].match(/[aeiou]/gi)){
      str[i] = vowels.shift();
    }
  }
  return str.join('');
}



console.log(reverseVowels("Hello!")); // "Holle!"
console.log(reverseVowels("Tomatoes")); // "Temotaos"
console.log(reverseVowels("Reverse Vowels In A String")); // "RivArsI Vewols en e Streng"

// solution 2

function reverseVowels(str) {
  const vowels = str.match(/[aeiou]/gi);
  return (vowels === null) ? str : str.replace(/[aeiou]/gi, c => vowels.pop());
}
