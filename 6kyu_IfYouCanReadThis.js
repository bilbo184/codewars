// 6 kyu - If you can read this
// Description:

// The idea for this Kata came from 9gag today.here
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.
// Like this:

// Input: If you can read
// Output: Indian Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

// Some notes
// Keep the punctuation, and remove the spaces.
// Use Xray without dash or space.


function to_nato(words){
  var nato = {
      'a' : "Alfa",'b' : "Bravo","c" : "Charlie","d" : "Delta","e" : "Echo",
      "f" : "Foxtrot","g" : "Golf","h" : "Hotel","i" : "India","j" : "Juliett",
      "k" : "Kilo","l" : "Lima","m" : "Mike","n" : "November","o" : "Oscar",
      "p" : "Papa","q" : "Quebec","r" : "Romeo","s" : "Sierra","t" : "Tango",
      "u" : "Uniform","v" : "Victor","w" : "Whiskey","x" : "Xray","y" : "Yankee","z" : "Zulu"
  };
  return words.toLowerCase().replace(/\s*/gi, "").split('').map(function(a){
    return (/[a-z]/i.test(a)) ? nato[a] + " " : a + " ";
  }).join('').trim();
}
 
console.log(to_nato('If you can read')); // India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

console.log(to_nato('Did not see that coming')); // Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf

