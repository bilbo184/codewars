// 6 kyu - Format a string of names like 'Bart, Lisa & Maggie'

// Description:

// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for 
// the last two names, which should be separated by an ampersand.
// Example:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
// list([ {name: 'Bart'} ])
// // returns 'Bart'
// list([])
// // returns ''

function list(names){
  if(names.length <= 1){
    return names.length === 1 ? names[0].name : "";
  }
  var str = '';
  var last = names.pop();
  for(var i = 0; i < names.length; i++){
    str = str + names[i].name +", ";
  }
  return str.slice(0, str.length-2)+" & " + last.name;
}



console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])); // Bart, Lisa & Maggie
console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ])); // Bart & Lisa
console.log(list([ {name: 'Bart'} ])); // Bart
console.log(list([])); // ""
