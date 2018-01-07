// 6kyu - Zero-plentiful Array

// An array is called zero-plentiful if it contains at least one 0 and 
// every sequence of 0s is of length at least 4. Your task is to return 
// the number of zero sequences if the given array is zero-plentiful else 0.

function zeroPlentiful(arr){
  let t = arr.join('').match(/0+/g);
  if(t === null){
    return 0;
  }
    // return t.every(a => a.length > 3) ? t.length : 0;
    return t.map(function(a){
      return a.length > 3;
    }) ? t.length : 0;
}


console.log(zeroPlentiful([3])); // 0
console.log(zeroPlentiful([0,0,0,0,0,0])); // 1
