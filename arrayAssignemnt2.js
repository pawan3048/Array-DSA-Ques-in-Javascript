// Problem 1: Find the Smallest and Largest Elements :

var arr = [9,3,4,5,2,-7,6,2,1,8,3];

var smallest = arr[0];
var largest = arr[0];

for(var i=0; i<arr.length; i++){

  if(smallest>arr[i]){
    smallest = arr[i]
  }
  if(largest<arr[i]){
    largest = arr[i]
  }

}
console.log(smallest) //Output: -7
console.log(largest) //Output: 9

// Problem 2 : Write a program to add two arrays element-wise and create a new array with the results.

var arr1 = [1,2,3,4,5,2,6,3];
var arr2 = [1,2,3,4,5,2,6,5];
var newArr = []

for(var i=0; i<arr1.length; i++){
  newArr[i] = arr1[i] + arr2[i];
}
console.log(newArr)

// Problem 3 : Array Intersection

var array1 = [6, 3, 9, 5];
var array2 = [7, 6, 2, 3];
var intersec = [];

for (var i = 0; i < array1.length; i++) {
  for (var j = 0; j < array1.length; j++) {
    if (array1[i] === array2[j]) {
      intersec[i] = array2[j];
    }
  }
}
console.log(intersec);

// Problem 4 : Array Palindrome : 1st Approch

var arrayP = [1, 2, 1];
var revstr = "";
var str = "";

for (var i = 0; i < arrayP.length; i++) {
  str += arrayP[i];
}
for (var j = arrayP.length - 1; j > -1; j--) {
  revstr += arrayP[j];
}

if (str === revstr) {
  console.log("Array is Palindrome");
} else {
  console.log("Array is not a Palindrome");
}

// Problem 5: Remove Duplicates

var arr = [1, 2, 2, 3, 4, 4, 5, 6, 5, 6];

var uniqueArr = [];

for (var i = 0; i < arr.length; i++) {
  var isUnique = false;

  for (var j = 0; j < uniqueArr.length; j++) {
    if (arr[i] === uniqueArr[j]) {
      isUnique = true;
      break;
    }
  }

  if (!isUnique) {
    uniqueArr.push(arr[i]);
  }
}

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
