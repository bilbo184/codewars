// The aim of this Kata is to write a function which will reverse the case of all consecutive duplicate letters in a string. That is, any letters that occur one after the other and are identical.

// If the duplicate letters are lowercase then they must be set to uppercase, and if they are uppercase then they need to be changed to lowercase.

// Examples:

// reverseCase("puzzles")    Expected Result: "puZZles"
// reverseCase("massive")    Expected Result: "maSSive"
// reverseCase("LITTLE")     Expected Result: "LIttLE"
// reverseCase("shhh")       Expected Result: "sHHH"


function reverseCase(str){
return str.replace(RegExp(/(.)\1{1,}/, "g"), a => /[A-Z]/.test(a) ? a.toLowerCase() : a.toUpperCase());
}

// function reverseCase(string) {
//   return string.replace(/([a-zA-Z])\1+/g, v => v.toLowerCase() === v ? v.toUpperCase() : v.toLowerCase());
// }

// function reverseCase(string) {
//   return string.replace(/(.)\1+/g, x => x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase());
// }

console.log(reverseCase("puzzles"));
console.log(reverseCase("massive"));
console.log(reverseCase("LITTLE"));
console.log(reverseCase("shhh"));
