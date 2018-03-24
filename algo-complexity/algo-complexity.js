/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means [something describing the nature of the implementation]
*/


// Problem 1: Retrieval of a value from a hash table using the following function with regard to the size of the hash table.

/*
 Complexity:This function has O(1); because n is the number of the array elements which the function doesnt depend on it; though it depends on the key characters; array[hash] this means we are  looking up an array for a certain element is a constant time complexity.
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
 Complexity:this function(binary search method) has O(log n);(var halfOfArray = item < array[center] ? array.slice(0, center) : array.slice(center)) this line means where we exclude half of the array in every recursion;
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
 Complexity:this function has O(n^2)because its for loop(indexof) inside a for loop,for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (array.slice(i + 1).indexOf(item) !== -1), which means that the worst case is finding the first not repeated element in the end of the array.
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
