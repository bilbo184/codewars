// We know that some numbers can be split into two primes. ie. 5 = 2 + 3, 10 = 3 + 7. But some numbers are not. ie. 17, 27, 35, etc..

// Given a positive integer n. Determine whether it can be split into two primes. If yes, return the maximum product of two primes. If not, return 0 instead.

// Input/Output
// [input] integer n

// A positive integer.

// 0 ≤ n ≤ 100000

// [output] an integer

// The possible maximum product of two primes. or return 0 if it's impossible split into two primes.

// Example

// For n = 1, the output should be 0.

// 1 can not split into two primes

// For n = 4, the output should be 4.

// 4 can split into two primes 2 and 2. 2 x 2 = 4

// For n = 20, the output should be 91.

// 20 can split into two primes 7 and 13 or 3 and 17. The maximum product is 7 x 13 = 91


function isPrime(n) {
    if(n === 2) { return true;}
    if(n <= 1 || n % 2 === 0) { return false;}
    for(let i = 3; i <= ~~Math.sqrt(n); i+=2) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

let primeProduct = function(n) {
    if(n <= 3) { return 0; }
    for(let i = ~~(n/2); i > 0; i--) {
        if(isPrime(n-i) && isPrime(i)) {
            return (n-i) * i;
        }
    }
    return 0;
}

console.log(primeProduct(1)); // 0
console.log(primeProduct(3)); // 0
console.log(primeProduct(4)); // 4
console.log(primeProduct(5)); // 6
console.log(primeProduct(6)); // 9
console.log(primeProduct(7)); // 10
console.log(primeProduct(8)); // 15
console.log(primeProduct(9)); // 14
console.log(primeProduct(10)); // 25
console.log(primeProduct(11)); // 0
console.log(primeProduct(12)); // 35
console.log(primeProduct(20)); // 91
console.log(primeProduct(100)); // 2491


