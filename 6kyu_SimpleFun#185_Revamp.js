// 6kyu - Simple Fun #185: Revamp
// Description:

// Task
// Consider a string of lowercase Latin letters and space characters (" ").

// First, rearrange the letters in each word alphabetically.
// And then rearrange the words in ascending order of the sum of their characters' ASCII values.

// If two or more words have the same ASCII value, rearrange them by their length in 
// ascending order; If their length still equals to each other, rearrange them 
// alphabetically.

// Finally, return the result.
// Example

// For s = "batman is bruce wayne", the result should be "is bceru aenwy aamntb".

// After rearranging the letters the string turns into
// "aamntb is bceru aenwy".
// The ASCII values of each word are: [627, 220, 529, 548].
// After sorting the words the following string is obtained:
// "is bceru aenwy aamntb" (with ASCII values of [220, 529, 548, 627]).
// For s = "peter parker is spiderman", the result should be "is eeprt aekprr adeimnprs"

// (ASCII values: [220, 554, 645, 963])
// Input/Output

// [input] string s

// A string of lowercase words. Each word is separated by exactly one space character.
// [output] a string

function revamp(str){
  return str.split(' ')
            .map(word => word.split(''))
            .map(chars => [chars.sort().join(''), chars.reduce((a, b) => a + b.charCodeAt(0), 0)])
            .sort((a, b) => a[1] - b[1] || a.length - b.length || a[0].localeCompare(b[0]))
            .map(a => a[0])
            .join(' ');
 
}
console.log(revamp("batman is bruce wayne")); // is bceru aenwy aabmnt
console.log(revamp("peter parker is spiderman")); // is eeprt aekprr adeimnprs
console.log(revamp("codewars is great")); // is aegrt acdeorsw
console.log(revamp("airplanes in the night sky")); // in eht ksy ghint aaeilnprs
console.log(revamp("fcybnuim dqk kyia mima anj lkugghxk aug")); // ajn agu dkq aimm aiky bcfimnuy gghkklux
console.log(revamp("mhgkn te ocllswua eop ldbvwqvu qdudyyjt gin qqci")); // et gin eop ciqq ghkmn acllosuw bdlquvvw ddjqtuyy
