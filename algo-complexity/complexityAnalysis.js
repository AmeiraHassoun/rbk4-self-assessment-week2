// List and briefly describe the types of algorithmic time complexity.
// Be as clear and complete as necessary to demonstrate your mastery.
// Write your explanation below as a comment
/*
1. O(1) - constant: 
	- it's the time complexity for a single expression without any loop used inside it.
	- example: 
		var a =1;

2. O(n) - linear:
	- it's the time complexity for a code includes one (for or while) loop inside it.
	- example:
		var arr = [1,2,3];
		for(var i = 0; i<arr.length; i++)
		{
			arr[i] *= 2;
		}

3. O(n to power 2):
	- it's the time complexity for a code includes two nested (for or while) loops, and each loop iterates
	through a whole array.
	- example:
		var arr = [4,6,1,8];
		for(var i = 0; i<arr.length; i++)
		{
			for(var j = 0; j<arr.length; j++)
			{
				arr[j] += 2;
			}
		}

4. O(log n):
	- it's the time complexity for a code which iterates through a sorted array uning binary search algorithm.
	- example: 
	 	sortedArrayContainsItem function which used in algo-complexity.js file

5. O(n to power exp) -  exponential
	- it's the time complexity for a code includes (exp) nested loops.

*/
