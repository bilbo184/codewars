// 6kyu - Running Average

// Python:

// Create a function running_average() that returns a callable function object. 
// Update the series with each given value and calculate the current average.

// r_avg = running_average()
// r_avg(10) = 10.0
// r_avg(11) = 10.5
// r_avg(12) = 11
// All input values are valid. Round to two decimal places.

// This Kata is based on a example from Fluent Python book.

// Javascript // Lua:

// Create a function runningAverage() that returns a callable function object. 
// Update the series with each given value and calculate the current average.

// rAvg = runningAverage();
// rAvg(10) = 10.0;
// rAvg(11) = 10.5;
// rAvg(12) = 11;

function runningAverage() {
    let arr = [];
    
    return function(n) {
        arr.push(n);
        console.log(arr);
        let avg = (arr.reduce((a,b) => a + b)/arr.length);
        console.log((avg%1)+"!!");
        console.log(String(avg % 1).length > 3);
        return (String(avg % 1).length > 3) ? Math.round(avg*100)/100 : avg;
       
    }
}

  // console.log(runningAverage(10)); // 10
  // console.log(runningAverage(11)); // 10.5   
  // console.log(runningAverage(12)); // 11
  
var rAvgSol = runningAverage();
  console.log(rAvgSol(10)); // 10
  console.log(rAvgSol(11)); // 10.5   
  console.log(rAvgSol(12)); // 11
  console.log(rAvgSol(22)); 
  console.log(rAvgSol(28)); 


// solution 2

function runningAverage() {
  var accumulator = 0;
  var size = 0;

  return function(number) {
    accumulator += number;
    size += 1;
    
    return Math.round(accumulator / size * 100) / 100;
  };
}




