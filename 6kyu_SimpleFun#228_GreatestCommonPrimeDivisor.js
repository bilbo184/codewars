// 6kyu - Simple Fun # 228: Greatest Common Prime Divisor

// Task

// Define GCPD (Greatest Common Prime Divisor) as the largest prime number that divides 
// both given positive integers. Your task is to find GCPD of the given integers a and b 
// or -1 if it doesn't exist.

// Input/Output

// [input] integer a

// 2 ≤ a ≤ 1000

// [input] integer b

// 2 ≤ b ≤ 1000

// [output] an integer

// GCPD of a and b or -1 if it doesn't exist.

// Example

// For a = 12 and b = 18, the output should be 3
// For a = 12 and b = 13, the output should be -1


function isPrime(num){
    if(num === 2){
        return true;
    }else if(num % 2 === 0){
        return false;
    }else{
        for(var i = 2; i < num; i++){
            if (num % i === 0){
                return false;
            }
        }
        return true;
    }
}
function greatestCommonPrimeDivisor(a, b) {
  for(var i = Math.min(a, b); i > 1; i--){
    if(isPrime(i) && a % i === 0 && b % i === 0){
      return i;
    }
  }
  return -1;
}

console.log(greatestCommonPrimeDivisor(12,18)); // 3
console.log(greatestCommonPrimeDivisor(12,13)); // -1
console.log(greatestCommonPrimeDivisor(2,3)); // -1
console.log(greatestCommonPrimeDivisor(100,140)); // 5

