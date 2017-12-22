// 6kyu - Mysterious Function

// Among the ruins of an ancient city a group of archaeologists found a mysterious 
// function with lots of HOLES in it called getNum(n) (or get_num(n) in ruby or 
// python). They tried to call it with some arguments. And finally they got this 
// journal:

// getNum(300) #-> returns 2
// getNum(90783) #-> returns 4
// getNum(123321) #-> returns 0
// getNum(89282350306) #-> returns 8
// getNum(3479283469) #-> returns 5
// The archaeologists were totally stuck with this challenge. They were all in 
// desperation but then.... came YOU the SUPER-AWESOME programmer. Will you be able 
// to understand the mystery of this function and rewrite it?

function getNum(n){
  return n.toString().split('').map(function(a){
    return /[069]/.test(a) ? 1 : a ==="8" ? 2 : 0;
  }).reduce(function(a, b){
    return a + b;
  },0);
}


console.log(getNum(300)); // 2
console.log(getNum(90783)); // 4
console.log(getNum(123321)); // 0
console.log(getNum(89282350306)); // 8
console.log(getNum(3479283469)); // 5



// var getNum = function(n) {
//     return n.toString().split("")
//                     .map(a=>/[069]/
//                     .test(a) ? 1 : a==="8" ? 2 : 0)
//                     .reduce((a,b) => a + b);
// };
