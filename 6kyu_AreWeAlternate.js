// 6kyu - Are we alternate?

// Create a function isAlt() that accepts a string as an argument and validates 
// whether the vowels (a, e, i, o, u) and consonants are in alternate order.

// isAlt("amazon")
// // true
// isAlt("apple")
// // false
// isAlt("banana")
// // true
// Arguments consist of only lowercase letters.

function isAlt(word) {
  return !/[aeiou]{2}|[^aeiou]{2}/.test(word);
}

// console.log(boolieArr("amazon"));
// console.log(boolieArr("apple"));
// console.log(boolieArr("banana"));


// solution 2

function boolieArr(str){
  return str.split('').map(function(el){
    return el.match(/[aeiou]/) ? true : false;
  }).join(' ');
}

function isAlt(word){
 return boolieArr(word).match(/\b(\w+)\s+\1\b/g) === null? true: false;
}
