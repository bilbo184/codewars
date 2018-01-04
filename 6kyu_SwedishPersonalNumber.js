// 6kyu - Swedish Personal Number

// Description:

// Write a Regex that would test for a valid Swedish personal number (ID). In Sweden this 
// number is formatted multiple ways (I have no idea why) so you would have to check all 
// these possibilities. This will be used to validate an input form.

// YYYYMMDD-XXXX

// YYYYMMDD+XXXX

// YYYYMMDDXXXX

// The first set refers to the birth date (year can be formatted just 2 characters or as 
// 	full year) and the four X at the end are random numbers.

// RegExp should test just for people born between year 1900 and current year (2016). 
// Also don't worry about moth of February and consider all months having at most 31 
// days.

function validatePersonalNumber (personalNumber) {
  var regex = new RegExp(/^(200\d|201[123456]|19\d\d)\d{4}[+-]?\d{4}$/)
  return regex.test(personalNumber);
}

console.log(validatePersonalNumber("201712204444")); // false
console.log(validatePersonalNumber("1917122-4414")); // false
console.log(validatePersonalNumber("190010130044")); // true
console.log(validatePersonalNumber("19500220-4941")); // true
console.log(validatePersonalNumber("201712204444")); // false
console.log(validatePersonalNumber("181712204434")); // false
console.log(validatePersonalNumber("19171220+-1444")); // false
console.log(validatePersonalNumber("19170220+1406")); // true
console.log(validatePersonalNumber("201612104542")); // true
