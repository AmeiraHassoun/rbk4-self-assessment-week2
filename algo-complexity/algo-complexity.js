/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means [something describing the nature of the implementation]
*/


// Problem 1: Retrieval of a value from a hash table using the following function with regard to the size of the hash table.

/*
 Complexity:
 */


var retrieve = function(key) 
{
  var hash = 0;
  for (var i = 0; i < key.length; i++) 
  {
    hash = (hash + Math.pow(i, hash)) % array.length;
  }
  return array[hash];
};
//Time complexity for this function is O(n), because it requeres (for loop) to iterate through the (key) which is a string, in order to compute the hash value which represents the index of the value to 
//retrieve from the array.
//But if the code would give me the hash value directly without any loop, the compleixity is O(1)



// Problem 2: sortedArrayContainsItem with regard to the length of the passed-in array

/*
 Complexity:
 */


var sortedArrayContainsItem = function(array, item) 
{
  var center = Math.floor(array.length / 2);
  if (array[center] === item) 
  {
    return true;
  }
  var halfOfArray = item < array[center] ? array.slice(0, center) : array.slice(center);
  return sortedArrayContainsItem(halfOfArray, item);
};
//Time complexity for this function is (log n), because this function applies binary search algorithm as the passed array is already sorted. So each time we check the item value, then we go either through the right half of the array 
//or through the left half of it, considering the current value of the array element whether it is less or bigger than the item value we check.
// .

// Problem 3: hasDuplicates with regard to the length of the passed in array

/*
 Complexity:
 */


var hasDuplicates = function(array) 
{
  for (var i = 0; i < array.length; i++)
  {
    var item = array[i];
    if (array.slice(i + 1).indexOf(item) !== -1) 
    {
      return true;
    }
  }
  return false;
};
//Time complexity for this function is (n to power 2), because in the worst case this function will itratate through each element in the array, and check if it's duplicated or not using (indexOf) function which itself includes (for) loop.