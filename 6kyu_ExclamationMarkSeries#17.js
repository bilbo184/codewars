// 6 kyu - Exclamation marks series #17: Put the exclamation marks and question marks to the balance, Are they balanced?

// Description:

// Description:

// Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?

// If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".
// Examples

// balance("!!","??") === "Right"
// balance("!??","?!!") === "Left"
// balance("!?!!","?!?") === "Left"
// balance("!!???!????","??!!?!!!!!!!") === "Balance"

function balance(left,right){
 left = left.split('').reduce(function(a, b){
   return a + ( b === "!" ? 2 : 3);
 },0);
 console.log(left);
 right = right.split('').reduce(function(a, b){
  return a + (b === "!" ? 2 : 3);
 },0);
 console.log(right);
 return left === right ? "Balance" : (left > right) ? "Left" : "Right";
}

console.log(balance("!!","??")); // "Right"
console.log(balance("!??","?!!")); // "Left"
console.log(balance("!?!!","?!?")); // "Left"
console.log(balance("!!???!????","??!!?!!!!!!!")); // "Balance"
