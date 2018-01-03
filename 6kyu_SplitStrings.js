// 6 kyu - Split Strings

// Description:

// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the 
// missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str){
 str = (str.length%2 === 0) ? str : str+"_";
 var arr = [];
 for(var i = 0; i < str.length; i=i+2){
   arr.push(str[i]+str[i+1]);
 }
 return arr;
}


console.log(solution('abc')); // ['ab', 'c_']
console.log(solution('abcdef')); // ['ab', 'cd', 'ef']

// solution 2

function solution(str) {
  return (str.length % 2 ? str + '_' : str).match(/../g);
}
