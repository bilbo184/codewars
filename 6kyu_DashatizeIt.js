// 6 kyu - Dashatize It

// Given a number, return a string with dash'-'marks before and after each odd integer, 
// but do not begin or end the string with a dash mark.


function dashatize(num) {
  var str = Math.abs(num).toString().split(/([13579])/g).filter(function(a){
    return a !== '';
  }).join("-");
  
  console.log(str);
}

console.log(dashatize(274)); //'2-7-4'
console.log(dashatize(6815)); // '68-1-5'

// solution 2

// function dashatize(num) {
//   return String(num)
//     .replace(/([13579])/g, "-$1-")
//     .replace(/--+/g, "-")
//     .replace(/(^-|-$)/g, "")
// }
