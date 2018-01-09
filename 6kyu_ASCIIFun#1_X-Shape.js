// This will probably be a little serie :)

// X-Shape

// You will get an odd Integer n (>= 3) and your task is to draw a X. Each line is 
// seperated with '\n'.

// Use the following characters:

// ■ □

// e.g.:


//                                      ■□□□■
//             ■□■                      □■□■□
//   x(3) =>   □■□              x(5)=>  □□■□□
//             ■□■                      □■□■□
//                                      ■□□□■


// function x(n) {
//   var arr = Array(n).fill().map(function(_){
//     return "□".repeat(n).split("")
//   })
//   for(var i = 0; i < arr.length; i++){
//   [arr[i][i], arr[i][arr.length-1-i]] = ["■","■"];
//   }
//   return arr.map(a=>a.join("")).join("\n");
// }

function x(n){
  var output = "";
  for(var i = 0; i < n; i++){
    for(var j = 0; j < n; j++){
      output = output + ((i===j || j === n-i-1) ? '■':'□') ;
    }
      output = output + ((i !== n-1) ? ('\n') : "");
  }
  return output;
}

console.log(x(5));
console.log(x(7));
console.log(x(11));
