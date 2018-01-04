// 6 kyu - Sum #1

// Description:
// PUZZLE #1. SU

// Assignment:
// Write a function named sum which performs addition in the way shown below

// sum(4)(5)(9)(); // => 18
// sum(5)();       // => 5
// sum();          // => 0
// NOTE: Pay attention that last brackets are left empty to indicate end of operations

function sum(n){
  if(n === undefined){
    return 0;
  }
  return function(next){
   if(next === undefined){
     return n;
   }
     return sum(n+next);
  }
}

console.log(sum(4)(5)(9)()); // 18
console.log(sum(7)(5)()); // 12
console.log(sum(5)()); // 5
console.log(sum()); // 0
