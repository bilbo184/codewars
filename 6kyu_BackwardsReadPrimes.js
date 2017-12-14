// 6 kyu - Backwards Read Primes

// Description:

// Backwards Read Primes are primes that when read backwards in base 10 
// (from right to left) are a different prime. (This rules out primes which are 
// alindromes.)

// Examples:
// 13 17 31 37 71 73 are Backwards Read Primes
// 13 is such because it's prime and read from right to left writes 31 which is 
// prime too. Same for the others.

// Task

// Find all Backwards Read Primes between two positive given numbers 
// (both inclusive), the second one being greater than the first one. The resulting 
// array or the resulting string will be ordered following the natural order of the 
// prime numbers.

// Example

// backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97]
// backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967]


let backwardsPrime = function(min, max) {
    let arr = [];
    for(let i = min; i <= max; i++) {
        let backwardNum = reverseNum(i);
        if(isPrime(i) && isPrime(backwardNum) && i != backwardNum){
            arr.push(i);
        }
    }
    return arr;
}

function reverseNum(n) {
    return n.toString().split('').reverse().join('');
}

function isPrime(num) {
  for(var i = 2; i < num; i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}

console.log(backwardsPrime(2, 100));
console.log(backwardsPrime(9900, 10000));


// console.log(reverseNum(13));
// console.log(reverseNum(31));

// // console.log(isPrime(13));
// console.log(isPrime(31));
// console.log(isPrime(17));
// console.log(isPrime(71));
// console.log(isPrime(75));
