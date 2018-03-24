/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means [something describing the nature of the implementation]
*/


// Problem 1: Retrieval of a value from a hash table using the following function with regard to the size of the hash table.

/*
 Complexity: This function has [O(n)], because [
 for (var i = 0; i < key.length; i++) {
    hash = (hash + Math.pow(i, hash)) % array.length;
  }] 
  means [when we use loop that mean we force the code to repeat that make the same var(i)and var(hach) will take different value each time ]
 */


var retrieve = function(key) {
  var hash = 0;
  for (var i = 0; i < key.length; i++) {
    hash = (hash + Math.pow(i, hash)) % array.length;
  }
  return array[hash];
};


// Problem 2: sortedArrayContainsItem with regard to the length of the passed-in array

/*
 Complexity:This function has [O(n) in best way (if array is already sorted)and O(n^2)if it's not],
  because [
 return sortedArrayContainsItem(halfOfArray, item);]
  means [
when we use Recursion (make the fanction repeat -one or more than one time-) that make the useing of memory more Complexity because of number of Operations 

  ]
 */


var sortedArrayContainsItem = function(array, item) {
  var center = Math.floor(array.length / 2);
  if (array[center] === item) {
    return true;
  }
  var halfOfArray = item < array[center] ? array.slice(0, center) : array.slice(center);
  return sortedArrayContainsItem(halfOfArray, item);
};


// Problem 3: hasDuplicates with regard to the length of the passed in array

/*
 Complexity:This function has [O(n)], 
 because [for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (array.slice(i + 1).indexOf(item) !== -1) {
      return true;
    }
  }
] means [
using loop
]
 */


var hasDuplicates = function(array) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (array.slice(i + 1).indexOf(item) !== -1) {
      return true;
    }
  }
  return false;
};
