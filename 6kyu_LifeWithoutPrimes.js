// 6kyu - Life Without Primes

// Consider an array that has no prime numbers, and none of its 
// elements has any prime digit. It would start with: 
// [1,4,6,8,9,10,14,16,18,..]. The element at index 1 is 4.

// You will be given an integer n and your task will be return the 
// number at that index in the array. For example, solve(1) = 4, as 
// explained above.

// More examples in the test cases.

// Good luck!


function isPrime(n) {
  if(n === 2) { return true; }
  if(n < 2 || n % 2 === 0) { return false; }
  for(let i = 3; i <= Math.sqrt(n); i+=2){
    if (n % i === 0) { return false;}
  }
  return true;
}

function solve(n) {
  var arr = [];
  for(var i = 1; arr.length <= n; i++){
    if(!isPrime(i) && !/[2357]/.test(i)) { 
      arr.push(i);
      }
  }  
  return arr.pop();
}


console.log(solve(10)); // 44 
console.log(solve(50)); // 169
console.log(solve(100)); // 644
console.log(solve(150)); // 896
console.log(solve(200)); // 1060
console.log(solve(300)); // 1668
console.log(solve(400)); // 4084
console.log(solve(500)); // 4681

