
// 6 kyu - Esoland: MiniBitMove

// Description:

// Task:

// This kata asks you to make a custom esolang interpreter for the language 
// MiniBitMove. MiniBitMove has only two commands and operates on a array of bits. It 
// works like this:

// 1: Flip the bit at the current cell
// 0: Move selector by 1
// It takes two inputs, the program and the bits in needs to operate on. The program 
// returns the modified bits. The program stops when selector reaches the end of the 
// array. Otherwise the program repeats itself. Note: This means that if a program does 
// not have any zeros it is an infinite loop

// Example of a program that flips all bits in an array:

// Code: 10
// Bits: 11001001001010
// Result: 00110110110101
// After you're done, feel free to make translations and discuss this kata.


function interpreter(tape, array) {
  var pointer = 0;
  array = array.split('');
  while(pointer < array.length){
    for(var i = 0; i < tape.length; i++){
      if(tape[i] == '1') {
        array[pointer] = array[pointer] == '0'?'1':'0';
      }
      if(tape[i] == '0') {
        pointer++;
      }
      if(pointer > array.length-1) break;
    }
  }
  return array.join('');
}

console.log(interpreter("10", "1100101")); // 0011010
console.log(interpreter("100", "1111111111")); // 0101010101
console.log(interpreter("10", "11001001001010")); // 00110110110101

