//  how of 2
/* Question 4 Give a positive integer "n", and deter mine the if the number is power of 2 or not An integer is 
power of two if there exists an interger "x"  such that "n*===2 */

function isPoweroftwo(n)
{
    if(n<1)
    {
        return false;
    }
    while(n>1)
    {
        if(n%2!==0)
        {
            return false
        }
        n=n/2
    }
    return true;
}
console.log(isPoweroftwo(1))
console.log(isPoweroftwo(2))
console.log(isPoweroftwo(5))
console.log(isPoweroftwo(1567))
console.log(isPoweroftwo(16))

/* Big-O of Power of two function
for loop O(n)  -- liner  
 if Big-O=O(log(n))   */


function ispoweroftwoBitWise(n)
{
    if(n<=1)
    {
        return false;
    }
    return(n &(n-1))==0
}
console.log(ispoweroftwoBitWise(16));
console.log(ispoweroftwoBitWise(10));

//  big-O notation of this functin is constanet