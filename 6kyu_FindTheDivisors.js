// 6kyu - Find the divisors!

// Create a function named divisors that takes an integer and returns an array with 
// all of the integer's divisors(except for 1 and the number itself). If the number 
// is prime return the string '(integer) is prime' (use Either String a in Haskell).

// Example:

// divisors(12); //should return [2,3,4,6]
// divisors(25); //should return [5]
// divisors(13); //should return "13 is prime"
// You can assume that you will only get positive integers as inputs.


function divisors(num){
  var arr = [];
  for(var i = 2; i < num; i++){
    if(num%i === 0){
      arr.push(i);
    }
  }
  return arr.length > 0 ? arr : num + " is prime";
}

console.log(divisors(12)); // 3
console.log(divisors(25)); // 1
console.log(divisors(13)); // 1
