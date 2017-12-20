// 6kyu - Format words into a sentence

// Description:

// Complete the method so that it formats the words into a single comma separated value. 
// The last word should be separated by the word 'and' instead of a comma. The method 
// takes in an array of strings and returns a single formatted string. Empty string values 
// should be ignored. Empty arrays or null/nil values being passed into the method should 
// result in an empty string being returned.

// formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
// formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
// formatWords([]) // should return ""

function formatWords(arr) {
  if(arr.length <= 1){
    return (arr.length) ? arr[0] : "";
  }
  var last = arr.pop();
  var str = '';
  for(var i = 0; i < arr.length; i++){
    if(arr[i] !== ""){
      str += arr[i] + ", ";
    }
  }
 return str.slice(0, str.length-2) +" and " +last;
}


console.log(formatWords(['ninja', 'samurai', 'ronin'])); // "ninja, samurai and ronin"
console.log(formatWords(['ninja', '', 'ronin'])); //"ninja and ronin"
console.log(formatWords(['ninja'])); //"ninja"
console.log(formatWords([])); // ""
