/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means
    [something describing the nature of the implementation]
*/


// Problem 1: Retrieval of a value from a hash table using the following function with
//regard to the size of the hash table.

/*
 Complexity:
 ------------------------------------
 The function below has a time complexity of O(n) which is constant, since there is
 one for loop the function is moving as required in constant time.
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
 ------------------------
 The function below for problem 2 has a time complexity of O(n^2), the reason being,
 the function is calling a calling the array argument in the first half and then returning true if the if the if
 statment is true, then applying the second part of the for loop statment (halfOfArray) in one function,
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
 The time complexity for the third problem is O(n) - constant, since the function has the job of 
 iterating through the array and then applying an if statment for the array inserted.
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
