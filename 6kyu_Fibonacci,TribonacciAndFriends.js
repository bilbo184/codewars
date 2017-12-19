// 6 kyu - Fibonacci, Tribonacci and Friends

// DESCRIPTION
// If you have completed the Tribonacci sequence kata, you would know 
// by now that mister Fibonacci has at least a bigger brother. If not, 
// give it a quick look to get how things work.

// Well, time to expand the family a little more: think of a Quadribonacci 
// starting with a signature of 4 elements and each following element is 
// the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would 
// 	probably sound a bit more italian, but it would also sound really 
// 	awful) with a signature of 5 elements and each following element is 
// the sum of the 5 previous, and so on.

// Well, guess what? You have to build a Xbonacci function that takes a 
// signature of X elements - and remember each next element is the sum 
// of the last X elements - and returns the first n elements of the so seeded 
// sequence.

function Xbonacci(signature,n){
 var x = signature.length;
 var temp = 0;
 while(signature.length < n){
   temp = 0;
   for(var i = x; i > 0; i--){
     temp += signature[signature.length - i];
   }
   signature.push(temp);
 }
 return signature.slice(0, n);
}


console.log(Xbonacci([0,1],10)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
console.log(Xbonacci([1,1],10)); // [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
console.log(Xbonacci([0,0,0,0,1],12)); // [ 0, 0, 0, 0, 1, 1, 2, 4, 8, 16, 31, 61 ]
console.log(Xbonacci([1,0,0,0,0,0,1],10)); // [ 1, 0, 0, 0, 0, 0, 1, 2, 3, 6 ]
console.log(Xbonacci([1,0,0,0,0,0,0,0,0,0],20)); // [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 4, 8, 16, 32, 64, 128, 256 ]

// solution 2

const Xbonacci = (sig, n) => {
  let len = sig.length;
  for (let i = len; i < n; i++) 
    sig[i] = sig.slice(i - len).reduce((a, b) => a + b);
  return sig.slice(0, n);
}
