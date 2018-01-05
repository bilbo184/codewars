// 6kyu - The rarest pepe

// The pepe market is on the verge of collapse. In a last ditch attempt to make some 
// quick cash, you decide to sift through the thousands of pepes on the Internet in 
// order to identify the rarest, which are worth more. Since this would be tedious to
// do by hand, you decide to use your programming skills to streamline the process.

// Your task in this kata is to implement a function that, given a list of pepes 
// (pepes), returns the rarest pepe in the list. If two or more pepes are equally 
// rare, return a list of these pepes, sorted in alphabetical order. Also, if the 
// rarest pepe (or pepes) has a frequency of 5 or more, then it is not really a rare 
// pepe, so your function should return 'No rare pepes!'.

function findRarestPepe(pepes){
  var obj = {};
  var temp = [];
  var lowest = Number.POSITIVE_INFINITY;
  for(var i = 0; i < pepes.length; i++){
    if(obj[pepes[i]] == null){
      obj[pepes[i]] = 1;
    }else{
      obj[pepes[i]]++;
    }
  }
  for(var j in obj){
    if(obj[j] < lowest){
      lowest = obj[j];
      temp = [j];
    }else if(obj[j] === lowest){
      temp.push(j);
    }
  }
 return (lowest >= 5) ? 'No rare pepes!' : (temp.length < 2) ? temp.pop() : temp.sort() ;
}

var pepes = [  'Donald Trump Pepe',
              'Melania Trump Pepe',
              'Clown Pepe',
              'Clown Pepe',
              'Donald Trump Pepe'];

console.log(findRarestPepe(pepes));

var pepes = [ 'Go Pepe',
              'Deep Learning Pepe',
              'Machine Learning Pepe',
              'Machine Learning Pepe',
              'Machine Learning Pepe'];
              
console.log(findRarestPepe(pepes));

var pepes = [ 'Codewars Pepe',
              'Codewars Pepe',
              'Codewars Pepe',
              'Codewars Pepe',
              'Codewars Pepe'];
              
console.log(findRarestPepe(pepes));

