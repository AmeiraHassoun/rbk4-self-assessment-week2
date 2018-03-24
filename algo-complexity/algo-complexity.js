/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means [something describing the nature of the implementation]
*/


// Problem 1: Retrieval of a value from a hash table using the following function with regard to the size of the hash table.

/*
 Complexity:
 */


var retrieve = function(key) {
  var hash = 0;
  for (var i = 0; i < key.length; i++) {
    hash = (hash + Math.pow(i, hash)) % array.length;
  }
  return array[hash];
};

/////////////////////////////
//if we considered getting the index of the key, the time complexity will be (O(n))-linear where n is the length of the key , but if we considered only the
//retriving process after we get the index , the time complexity will be (constant), because we know the index and we can directly have it from the array
//without searching
///////////////////////////




// Problem 2: sortedArrayContainsItem with regard to the length of the passed-in array

/*
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
////////////////////////
// the time complexity is O(log n) ,, because we are using the binary search method every time we are dividing by 2 
////////////////




// Problem 3: hasDuplicates with regard to the length of the passed in array

/*
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



////////////////
// the time complexity is O(n)-linear ,, because we have to ensure the all elements are not repeated ,, and in the worst case(having no repeated elements)
// we will go through them all
////////////////////