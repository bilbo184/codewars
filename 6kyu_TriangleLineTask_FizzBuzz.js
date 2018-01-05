// 6kyu - Triangle Line Task: Fizz Buzz

// You need to complete the FizzBuzz function:

// if n is divisible by 15, return 'fizzbuzz'
// if n is divisible by 5, return 'buzz'
// if n is divisible by 3, return 'fizz'
// otherwise, return n as a number
// where n is a positive integer.

// Requirement:

// 1.Every line must more than the next line 1 character.

// 2.The last line should be 1 character.

// 3.Spaces is not allowed.

// 4.Your code should looks like a triangle:

// codecode
// odecode
// decode
// ecode
// code
// ode
// de
// e

f = n => (n%15==0) ?"fizzbuzz" : (n%5===0) ? ("buzz") : (n%3===0) ? "fizz" :n; 



console.log(f(3)); // fizz
console.log(f(9)); // fizz
console.log(f(5)); // buzz
console.log(f(10)); // buzz
console.log(f(15)); // fizzbuzz
console.log(f(30)); // fizzbuzz
console.log(f(8)); // 8
console.log(f(28)); // 28
