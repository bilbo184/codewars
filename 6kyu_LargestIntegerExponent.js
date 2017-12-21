// 6kyu - Largest integer exponent

// Write a method named getExponent(n,p) that returns the largest integer 
// exponent x such that px evenly divides n. if p<=1 the method should return 
// null (throw an ArgumentOutOfRange exception in C#).

function getExponent(n, p) {
    if(p < 2) { 
      return null;
      }
    let count = 0;
    while(n % p === 0) {
        count++;
        n = n/p;
    }
    return count;
}

console.log(getExponent(18,1)); // null
console.log(getExponent(-250,5)); // 3 
console.log(getExponent(28,3)); // 0
console.log(getExponent(27,3)); // 3

