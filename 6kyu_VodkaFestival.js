// 6 kyu - Vodka Festival

// Description:

// Can you calculate total amount of vodka that Vodka God have drank on his festival?
// Unfortunately Vodka God drank from various goblets with different capacities.

// Task:

// Write function which accepts an array of drank amounts from various cups and 
// calculate total amount of vodka drunk by god.Result must be rounded to nearest 
// one and can be return both in literes or mililitres.
// Function input:

// -There will be only 2 types of units litres and mililitres.
// -Array will never be empty(hey its festival).
// //capacity format:
// //-number can be a float.
// //-only small letters.
// var shots = ["500ml","2l","1.4l"];

// //output must be in same format.
// vodkaConsumption(shots) //must return "3900ml" or "4l"

function vodkaConsumption(shots){
  var ml = shots.filter(function(a){
    return /ml/.test(a);
  }).map(function(a){
    return a.replace(/[a-z]/gi, "");
  }).reduce(function(a, b){
     return Number(a) + Number(b);
  }, 0);
  var liter = shots.filter(function(a){
    return !/ml/.test(a);
  }).map(function(a){
    return a.replace(/[a-z]/gi, "")*1000;
  }).reduce(function(a, b){
    return Number(a) + Number(b);
  }, 0);
  return Math.round((ml) + (liter)) + "ml";
}

console.log(vodkaConsumption(["500ml","2l","1.4l"])); // 
console.log(vodkaConsumption(["40ml","5.5l"])); // 

// solution 2

function vodkaConsumption(shots){
   return shots.map(x => {
    var measure = x.match(/[A-Za-z]/g).join('');
    var amount = x.match(/[0-9\.]/g).join('');
   return (measure === "l") ? amount*1000 : + amount;
 }).reduce((a, b) => a+ b) +"ml"; 
}
