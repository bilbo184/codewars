// 6 kyu - Triple Trouble

// Description:

// Write a function

// tripledouble(num1,num2)
// which takes in numbers num1 and num2 and returns 1 if there is a straight 
// triple of a number at any place in num1 and also a straight double of the same 
// number in num2.

// For example:
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1
// If this isn't the case, return 0


function tripledouble(num1, num2){
  var match = String(num1).match(/(\d)\1{2}/g);
  for(var i in match){
    if(String(num2).indexOf(match[i].substr(1)) > -1){
      return 1;
    }
  }
  return 0;
}

console.log(tripledouble(451999277,41177722899)); // 1
console.log(tripledouble(1222345, 12345)); // 0
console.log(tripledouble(12345, 12345)); // 0
console.log(tripledouble(666789, 12345667)); // 1 
console.log(tripledouble(10560002, 100)); // 1



// solution 2


function tripledouble(num1, num2){
  for(var i = 0; i < 10; i++){
    triple = new RegExp (i + "{3}")
    double = new RegExp (i + "{2}")
    if(triple.test(num1) && double.test(num2)){
       return 1
    }
  }
  return 0
}
