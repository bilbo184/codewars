// 6 kyu - Find the Parity Outlier

// Description:

// You are given an array (which will have a length of at least 3, 
// but could be very large) containing integers. The array is either entirely comprised 
// of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns N.

// For example:

// [2, 4, 0, 100, 4, 11, 2602, 36]

// Should return: 11

// [160, 3, 1719, 19, 11, 13, -21]

// Should return: 160

function findOutlier(arr){
  var arr1 = [];
  var arr2 = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i]%2 === 1 || arr[i]%2 === -1){
      arr1.push(arr[i]);
    }else{
      arr2.push(arr[i]);
    }
  }
  return arr1.length === 1 ? arr1[0] : arr2[0];
}

console.log(findOutlier([0, 1, 2])); // 1
console.log(findOutlier([1, 2, 3])); // 2
console.log(findOutlier([2,6,8,10,3])); // 3
console.log(findOutlier([0,0,3,0,0])); // 3
console.log(findOutlier([1,1,0,1,1])); // 0
console.log(findOutlier([-126419384,-77748715,-137272164,-184622374,-131364808,172316244,171161972,112109140,37039864,-60033196,-110003260,-124425118,-67564184,82344226,-74237446,-196304104,-160035058,-92784302]));
// -77748715


// solution 2

function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}
