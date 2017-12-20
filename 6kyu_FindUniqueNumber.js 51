// 6 kyu - Find the unique number

// Description:

// There is an array with some numbers. All numbers are equal 
// except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains 3 or more numbers.


function findUniq(arr) {
  arr = arr.sort(function(a, b){
    return a - b;
  });
 return arr[0] == arr[1] ? arr[arr.length-1] : arr[0];
}

console.log(findUniq([ 1, 1, 1, 1, 1, 1 ])); // 2 
console.log(findUniq([ 0, 0, 0.55, 0, 0 ])); // 0.55
console.log(findUniq([ 3, 10, 3, 3, 3 ])); // 10

