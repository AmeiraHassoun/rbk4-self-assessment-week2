// List and briefly describe the types of algorithmic time complexity.
// Be as clear and complete as necessary to demonstrate your mastery.
// Write your explanation below as a comment
/*
**some time the time complexity to solve a problem be less than the worst case 
but we always care about the worset case

1- O(1): that mean the time complexity to solve the problem is always only one
time like return 1 alwyas or do something dont need loop or recursive
** and it is the best case always

2- O(log n): that mean the time complexity to solve the problem is be half of the length of the
 thing i want to solve the problem on it and each time will be half recursive or loop to solve
 the problem like if problem length 80 will be 40 then 20 then 10 then 10 then 5 then 2 then 1

3- O(n): that mean the time complexity to solve the problem is depend on the length of the
 thing i want to solve the problem on it like if i have array of 100 the time to solve this 
 problem will be 100 time to can cover all case and item

4- O(n log n): the same above but that like point 2+point 3
like if have 100 will be 100+(50+25+12+6+3+2+1)  

5- O(n^2): the same above but that like point 3 inside point 3
and that like two loop inside each other or recursive of loop inside loop

6- O(2^n): the same above but that will be so bad if i have 10 item will be 100 to solve it

7- O(n^n): and this one it is the most bad and if your code be like point 6 or 7 
that mean you must refactore it

*/
