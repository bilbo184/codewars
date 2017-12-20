// 6 kyu - How much hex is the fish

// Description:
// How much is the fish! (- Scooter )
// The ocean is full of colorful fishes. We as programmers want to 
// know the hexadecimal value of these fishes.
// Task
// Take all hexadecimal valid characters (a,b,c,d,e,f) of the 
// given name and XOR them. Return the result as an integer.



function fisHex(str){
  return str.match(/[a-f]/gi) ? str.match(/[a-f]/gi).reduce(function(a, b){
    return a ^ parseInt(b, 16);
  },0) : 0;
}



console.log(fisHex("pufferfish")); // "1"
console.log(fisHex("puffers")); // "14"
console.log(fisHex("balloonfish")); // "14"
console.log(fisHex("blowfish")); // "4"
console.log(fisHex("bubblefish")); // "10"
console.log(fisHex("globefish")); // "10"
console.log(fisHex("swellfish")); // "1"
console.log(fisHex("toadfish")); // "8"
console.log(fisHex("toadies")); // "9"
console.log(fisHex("honey toads")); // "9"
console.log(fisHex("sugar toads")); // "13"
console.log(fisHex("sea squab")); // "5"
