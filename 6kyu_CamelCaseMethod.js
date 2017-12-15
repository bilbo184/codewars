// 6 kyu - CamelCase Method

// Description:

// Write simple .camelcase method for strings. All words must have their first letter 
// capitalized without spaces.



String.prototype.camelCase = function(){
    return this.split(' ').map(function(val, i){
      return val.charAt(0).toUpperCase()+val.slice(1);
    }).join('');
};


console.log("hello case".camelCase()); // HelloCase
console.log('camel case word'.camelCase()); // CamelCaseWord

