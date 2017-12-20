// 6 kyu - Give me a diamond
//
// Description:

// This kata is to practice simple string output. Jamie is a programmer, and James' girlfriend. 
// She likes diamonds, and wants a diamond string from James. Since James doesn't know how to 
// make this happen, he needs your help.

// Task:

// You need to return a string that displays a diamond shape on the screen using asterisk ("*") 
// characters. Please see provided test cases for exact output format.

// The shape that will be returned from print method resembles a diamond, where the number 
// provided as input represents the number of *’s printed on the middle line. The line above and 
// below will be centered and will have 2 less *’s than the middle line. This reduction by 2 *’s 
// for each line continues until a line with a single * is printed at the top and bottom of the 
// 	figure.

// Return null if input is even number or negative (as it is not possible to print diamond with 
// 	even number or negative number).

function diamond(n){
 if (n <= 0 || n%2 === 0){
    return null;
  }
  var arr = [];
  for(var i = 1; i <= n; i+=2){
    arr.push(' '.repeat((n-i)/2) + '*'.repeat(i));
  }
  return arr.concat(arr.slice(0, arr.length-1).reverse()).join('\n')+'\n';
}
console.log(diamond(3)); //
console.log(diamond(2)); // 
console.log(diamond(-3)); // 
console.log(diamond(0)); // 
console.log(diamond(5)); // 

