// 6kyu - String Average

// You are given a string of numbers between 0-9. Find the average of these numbers 
// and return it as a floored whole number (ie: no decimal places) written out as a 
// string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"

function averageString(str){
  var obj = {
    "zero": 0,
    "one" : 1,
    "two" : 2,
    "three" : 3,
    "four" : 4,
    "five" : 5,
    "six" : 6,
    "seven" : 7,
    "eight" : 8,
    "nine" : 9
  };
  var arr = [];
  str = str.split(' ');
  for(var i = 0; i < str.length; i++){
    if(obj[str[i]] === undefined){
      return "n/a";
    }else{
    arr.push(obj[str[i]]);
    }
  }
  var ave = Math.floor(arr.reduce((a, b) => a +b ,0)/arr.length);
  return Object.keys(obj)[ave];
}

console.log(averageString("zero nine five two")); // four
console.log(averageString("four six two three")); // three
console.log(averageString("one two three four five")); // three
console.log(averageString("five four")); // four
console.log(averageString("zero zero zero zero zero")); // zero
console.log(averageString("one one eight one")); // two
