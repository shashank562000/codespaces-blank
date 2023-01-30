/* factorial of the number()
 Question :Give an  integer 'n' find the  factorial of the  number */
 function factorial(n)  // factorial of a number like 
 {
    let result=1
    for (let i =2; i <= n; i++) 
    {
        result =result*i
    }
    return result
 }
console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(10));
