// 6kyu - Computing the complex logarithm function

// Compute the complex logarithm at any given complex number, accurate to at least 
// 1 in 10^-12. The imaginary part should be inside the interval (−π, π] (i.e if 
// 	the imaginary part is exactly π, keep it as is).

// Note: You shouldn't try to compute the value of this function at the poles. 
// Please return null/NULL/nil/None (C#: throw an ArgumentException, Java: throw 
// 	an ArithmeticException) if this happens.

function log([real, imag]){
  return (real) ? [Math.log(Math.hypot(real,imag)), Math.atan2(imag,real)] :  null;
}

console.log(log([20,0])); //[Math.log(20),0]
console.log(log([-1, 0])); // [0,Math.PI]
console.log(log([1, 1])); // [Math.log(Math.SQRT2),Math.PI/4]
console.log(log([0, 0])); // null
