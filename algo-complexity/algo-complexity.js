/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] 
    means [something describing the nature of the implementation]
*/


// Problem 1: Retrieval of a value from 
//a hash table using the following function with regard to the size of the hash table.

/*
 Complexity: 
 the time complexity is O(1) becuase we are want a specific value with specific
  key like the value inside index in array
 */


var retrieve = function(key) {
  var hash = 0;
  for (var i = 0; i < key.length; i++) {
    hash = (hash + Math.pow(i, hash)) % array.length;
  }
  return array[hash];
};


// Problem 2: sortedArrayContainsItem with 
//regard to the length of the passed-in array

/*
 Complexity:
 the time complexity is O(log n) becuase we are want to find a specific value in sorted
  array that mean we will use binary search 
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
 the time complexity is O( n) becuase must pass item by item to know it is has duplicates
  or not
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
