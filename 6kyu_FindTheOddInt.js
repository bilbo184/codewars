// 6kyu - Find the odd int

// Description:

// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


// function findOdd(xs){
//   return xs.reduce(function(a, b){
//     return a ^ b;
//   });
// }

function findOdd(arr){
  var obj = {};
  arr.map(function(a){
    (!obj[a])? obj[a] = 1 : obj[a]++;
  });
  for(var key in obj){
    if(obj[key]%2 === 1){
      return key;
    }
  }
}


console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // 5
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])); // -1
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])); // 5
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1])); // 10
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10])); // 1
