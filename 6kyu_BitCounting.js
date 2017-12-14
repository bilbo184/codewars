// 6 kyu - Bit Counting

// Description:

// Write a function that takes an (unsigned) integer as input, and returns the number 
// of bits that are equal to one in the binary representation of that number.

// Example: The binary representation of 1234 is 10011010010, so the function should 
// return 5 in this case


var countBits = function(n) {
  return n.toString(2).split('').reduce(function(a, b){
    return Number(a)+Number(b);
  }, 0);
};

console.log(countBits(1234));


// solution 2

function countBits(n) {
  for(c=0;n;n>>=1)c+=n&1
  return c;
}
