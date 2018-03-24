/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means [something describing 
    the nature of the implementation]
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
/*********************Answer
 I think this has constant complexity which is the ideal case because i have already the key 
so I will access the value easily

***********************/
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

/*********************Answer
 I think this will use the binary search algorithm which means that we will divide the array
  to the half and consider only the related one and keep dividing and cosidering till we get the right answer 
  the complexity is logn 

***********************/
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


/*********************Answer
 I think this has linear complexity because we have only one for loop to ierate over 
 the items since n is the length of the array
***********************/
