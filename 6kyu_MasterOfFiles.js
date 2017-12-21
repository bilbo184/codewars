// 6 kyu - Master of Files

// Are you a file extension master? Let's find out by checking if Bill's files are images or audio 
// files. Please use regex if available natively for your language.

// You will create 2 string methods:

// isAudio/is_audio, matching 1 or + uppercase/lowercase letter(s) (combination possible), 
// with the extension .mp3, .flac, .alac, or .aac.
// isImage/is_image, matching 1 or + uppercase/lowercase letter(s) (combination possible), 
// with the extension .jpg, .jpeg, .png, .bmp, or .gif.

// Rules

// It should return true or false, simply.
// File extensions should consist of lowercase letters and numbers only.
// File names should consist of letters only (uppercase, lowercase, or both)
// Good luck!


String.prototype.isAudio = function() {
  return /^[a-zA-Z]+\.(mp3|flac|alac|aac)$/.test(this);
};

String.prototype.isImage = function() {
  return /^[a-zA-Z]+\.(jpg|jpeg|png|bmp|gif)$/.test(this);
};

console.log("Nothing Else Matters.mp3".isAudio()); // false
console.log("NothingElseMatters.mp3".isAudio()); // true
console.log("DaftPunk.FLAC".isAudio()); // false
console.log("DaftPunk.flac".isAudio()); // true
console.log("AmonTobin.aac".isAudio()); // true
console.log(" Amon Tobin.alac".isAudio()); // false
console.log("tobin.alac".isAudio()); // true
console.log("Home.jpg".isImage()); // true
console.log("flat.jpeg".isImage()); // true
console.log("icon2.jpg".isImage()); //  false
console.log("bounce.gif".isImage()); // true
console.log("animate bounce.GIF".isImage()); // false
console.log("transparency.png".isImage()); // true

// solution 2

// String.prototype.isAudio = function() {
//   return /^[a-zA-Z]+\.(mp3|flac|al?ac)$/.test(this)
// }

// String.prototype.isImage = function() {
//   return /^[a-zA-Z]+\.(jpe?g|png|bmp|gif)$/.test(this)
// }
