// 6 kyu - Organise duplicate numbers in list

// Description:

// Sam is an avid collector of numbers. Every time he finds a new number he throws it 
// on the top of his number-pile. Help Sam organise his collection so he can take it 
// to the International Number Collectors Conference in Cologne.

// Given an array of numbers, your function should return an array of arrays, where each 
// subarray contains all the duplicates of a particular number. Subarrays should be in 
// the same order as the first occurence of the number they contain:

// group([3, 2, 6, 2, 1, 3])
// >>> [[3, 3], [2, 2], [6], [1]]
// Assume the input is always going to be an array of numbers. If the input is an empty 
// array, an empty array should be returned.

function group(arr) {
 var newArr = [];
 while(arr.length){
 var temp = arr[0];
 count = arr.filter(function(a){
   return a === temp;
 }).length;
 arr = arr.filter(function(a){
   return a !== temp;
 });
 newArr.push(Array(count).fill(temp));  
 }
 return newArr;
}


console.log(group([3, 2, 6, 2, 1, 3])); // [[3, 3], [2, 2], [6], [1]]
console.log(group([3, 2, 6, 2])); // [[3], [2, 2], [6]]

// solution 2

function group(arr) {
  var result = [];
  while(arr.length > 0)
  {
    result.push(arr.filter(a => a == arr[0]));
    arr = arr.filter(a => a != arr[0]);    
  }
  return result;
}
