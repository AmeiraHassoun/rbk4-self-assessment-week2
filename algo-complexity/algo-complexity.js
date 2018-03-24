/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means [something describing the nature of the implementation]
*/


// Problem 1: Retrieval of a value from a hash table using the following function with regard to the size of the hash table.

/*
 Complexity:
 -This function has O(1), because the for loop is iterating over the length of the key, which is not related to n (the size of the hash table) and 
 the line  return array[hash]  has the time complexity of retrieving from an array which is also constant 
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
 Complexity:
 -This function has O(logn) becuase  return sortedArrayContainsItem(halfOfArray, item); is ignoring half of the array and looking in the other half
 which means in every calling for the function through this recursion n is decreasing by half. (binary search)
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
 Complexity:
 -This function has O(n^2) becuase this line:for (var i = 0; i < array.length; i++) is iterating over the length of the array 
 and indexOf is also iterating over the remaining length of the array (the element after array[i]) every time in the for loop
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
