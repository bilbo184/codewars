// 6 kyu - Checking Groups

// Description:

// In English and programming, groups can be made using symbols such as "()" and "{}" 
// that change meaning. However, these groups must be closed in the correct order to 
// maintain correct syntax.

// Your job in this kata will be to make a program that checks a string for correct 
// grouping. For instance, the following groups are done correctly:

// ({})
// [[]()]
// [{()}]
// The next are done incorrectly

// {(})
// ([]
// [])
// A correct string cannot close groups in the wrong order, open a group but fail to 
// close it, or close a group before it is opened.

// Your function will take an input string that may contain any of the symbols "()" 
// "{}" or "[]" to create groups.

// It should return True if the string is empty or otherwise grouped correctly, or 
// False if it is grouped incorrectly.


function groupCheck(s) {
  var match = {"(":")", "[":"]","{":"}"};
  var stack= [];
  var str = s.split('');
  for(var i in str){
    if(match[str[i]]){
      stack.push(str[i]);
    }else{
     if(str[i] !== match[stack.pop()]){
       return false;
     }
    }
  }
 
  return stack.length === 0;
}



console.log(groupCheck("()")); // true
console.log(groupCheck("{(})")); // false
console.log(groupCheck("[])")); // false

// solution 2

function groupCheck(s) {
  let arr = [];
  if(s.length % 2 === 1) { return false; }
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '(' || s[i] === '[' || s[i] === '{')
      arr.push(s[i])
    else if((s[i] === ')' && arr.pop() !== '(') || 
       (s[i] === '}' && arr.pop() !== '{') || 
       (s[i] === ']' && arr.pop() !== '['))
        return false;       
  }
  return true;
}

// solution 3

 function groupCheck(s){
   var r = /\{\}|\[\]|\(\)/;
   while(r.test(s))
     s = s.replace(r, '');  
   return !s.length;   
 }
