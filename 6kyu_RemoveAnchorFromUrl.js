// Complete the function/method so that it returns the url with anything after the anchor (#) removed.



function removeUrlAnchor(url){
  return url.split("#").shift();
}



console.log(removeUrlAnchor('www.codewars.com#about'));
// returns 'www.codewars.com'

console.log(removeUrlAnchor('www.codewars.com?page=1'));
// returns 'www.codewars.com?page=1' 
