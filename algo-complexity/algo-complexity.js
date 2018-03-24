/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means [something describing the nature of the implementation]
*/


// Problem 1: Retrieval of a value from a hash table using the following function with regard to the size of the hash table.

/*
 Complexity:
 retrieve function
 -This function has (linear complexity), that means the big O is n, because the compiler have
  to go through (for loop) and ecexute the operation n time.
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
 sortedArrayContainsItem function
-This function has (linear complexity), that means the big O is n, because the compiler have
  to go through (recursion at the end of our code) and ecexute the operation n time.
 Complexity:
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
 hasDuplicates function
-This function has (square n complexity), that means the big O is n^2, because we have here nested
loop(at line:57 we have for loop and inside it we have indexOf function which use for loop too),
so compiler will execute the operation n^2 time.
 Complexity:
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
