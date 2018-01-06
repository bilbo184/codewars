// 6 kyu - Which are in?

// Description:

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical 
// order of the strings of a1 which are substrings of strings of a2.

// Example 1:

// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]

// Example 2:

// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your 
// language.
// Beware: r must be without duplicates.

function inArray(arr1, arr2){
  var arr= [];
  for(var i = 0; i < arr1.length; i++){
    var substr = arr1[i];
    for(var j = 0; j < arr2.length; j++){
      if(arr2[j].indexOf(substr) > -1){
        arr.push(substr);
        break;
      }
    }
  }
  return arr.sort();
}


console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])); // ["arp", "live", "strong"]
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"])); // []

