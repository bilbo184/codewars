// 6 kyu - Regexp Basics - is it IPV4 address?

// Description:

// Implement String#ipv4_address?, which should return true if given object is an IPv4 
// address - four numbers (0-255) separated by dots.
// It should only accept addresses in canonical representation, so no leading 0s, spaces etc.

String.prototype.ipv4Address=function(){
  if(!/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(this)) { return false;}
  let str = this.split('.');
  for(let i = 0; i < str.length; i++) {
    if(str[i] < 0 || str[i] > 255 || (str[i][0] === '0' && str[i].length > 1)) { return false; }
  }
  return true;
}

// solution 2

String.prototype.ipv4Address=function(){
     return /^(((\d)|(\d\d)|(1\d\d)|(2[0-4]\d)|(25[0-5]))\.){4}$/.test(this+".");
};


console.log("".ipv4Address()); //  false
console.log("127.9.0.1".ipv4Address()); // true
console.log("0.0.0.0".ipv4Address()); // true
console.log("255.255.255.255".ipv4Address()); // true
console.log("10.20.30.40".ipv4Address()); // true
console.log("10.256.30.40".ipv4Address()); // false
console.log("10.20.030.40".ipv4Address()); // false
console.log("127.0.1".ipv4Address()); // false
console.log("127.0.0.0.1".ipv4Address()); // false
console.log("..255.255".ipv4Address()); // false

