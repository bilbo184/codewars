// 6kyu - Mix Fruit Juice

// Story

// Jumbo Juice makes a fresh juice out of fruits of your choice.Jumbo Juice charges 
// $5 for regular fruits and $7 for special ones. Regular fruits are Banana, Orange, 
// Apple, Lemon and Grapes. Special ones are Avocado, Strawberry and Mango. Others 
// fruits that are not listed are also available upon request. Those extra special 
// fruits cost $9 per each. There is no limit on how many fruits she/he picks.The 
// price of a cup of juice is the mean of price of chosen fruits. In case of decimal 
// number (ex. $5.99), output should be the nearest integer (use the standard 
// 	rounding function of your language of choice).
// Input

// The function will receive an array of strings, each with the name of a fruit. 
// The recognition of names should be case insensitive. There is no case of an enmpty 
// array input.
// Example

// ['Mango', 'Banana', 'Avocado'] //the price of this juice bottle is (7+5+7)/3 = 
// $6($6.333333...)


function mixFruit(arr) {
    let f = ['banana', 'orange', 'apple', 'lemon', "grapes"],
        s = ['avocado', 'strawberry', 'mango'];
   var arr1 = (arr.map(function(val){
      return (f.indexOf(val.toLowerCase()) > -1) ? 5 : (s.indexOf(val.toLowerCase()) > -1) ? 7 : 9;
    }));
   
   return Math.round(arr1.reduce(function(a, b){
     return a + b;
   },0)/arr1.length);
    
}

console.log(mixFruit(['Mango', 'Banana', 'Avocado'])); // 6
console.log(mixFruit(['watermelon','mango','avocado'])); //  8
console.log(mixFruit(['avocado', 'strawberry'])); // 7


// solution 2

function mixFruit (arr) {
  var prices = {banana:5,orange:5, apple:5, lemon:5, grapes:5, avocado: 7, strawberry:7,mango:7};
  return Math.round(arr.reduce((a,b)=> a += prices[b.toLowerCase()] || 9,0)/arr.length);
}

// solution 3


function mixFruit(arr) {
    let f = ['banana', 'orange', 'apple', 'lemon', "grapes"],
        s = ['avocado', 'strawberry', 'mango'];
    return Math.round(arr.map((a) => (f.indexOf(a.toLowerCase()) > -1) ? 5 : (s.indexOf(a.toLowerCase()) > -1) ? 7 : 9).reduce((a,b)=> a + b)/arr.length)
