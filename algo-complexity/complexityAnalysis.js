// List and briefly describe the types of algorithmic time complexity.
// Be as clear and complete as necessary to demonstrate your mastery.
// Write your explanation below as a comment
/*
Big O(1) : constant time , in this case it will be only constant operation all the time
			for example we may only need 3 step to inset and item each time, so that also Big O(1),
			how many step will not effect us as it keep the same step each time and not encrease or decrease.
			and this is the ideal case for us.

Big O(n Log(n)): this case is like ( Binary Search ), we will keep passing half element each time we make and operation
				for example in case we want to search for item in sorted array using binary search,
				we will be searching in half of the array element in the worst case,
				and maybe in best case it will be only 1 search operation .
				this is the 2nd best time complexity

Big O(n) : a leaner time complexity, most likly our operation in this type will be realted to n 
			for example: if we have array with length of 10 , and want to multiply array element by 2,
			we will have to vist each element once and make our operation. 
			so in this case our operation will 10 ( our array length).
			most likly if we have loop this is will be our time complexity (if there no nested array inside).

Big O(n^2) : quadric time, this is one of worse cases, becouse our operation will increase in a hige amout as our elemnt increase ,
			so if we have array of length of 5 , we will be need around 25 operation ( which is huge )
			becouse if we have array of 100 elemnt, and we want to do that , it will be 100 ^ 2 =1000 operation .
			and this case our algorathem will take much time, in most cases we need to try not to get for this case as much as we can 


*/

