// 6kyu - String Breakers

// I will give you an integer (N) and a string. Break the string up into as many 
// substrings of N as you can without spaces. If there are leftover characters, 
// include those as well.

// Example: 

// N = 5;

// String = "This is an example string";

// Return value:
// Thisi
// sanex
// ample
// strin
// g

// Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'

function stringBreakers(n, str){
  str = str.replace(/\s+/g, "");
  var arr = [];
  for(var i = 0; i < str.length; i+=n){
    arr.push(str.substr(i, n));
  }
  return arr.join("\n");
}

// return string.replace(/\s+/g,"").match(new RegExp(".{1," + n + "}", "g")).join("\n");

console.log(stringBreakers(5, 'This is an example string'));

