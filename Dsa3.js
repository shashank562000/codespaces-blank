// prime number 
/* Give a natural number 'n' determine if number is prime or not */
function isprime(n)
{
  if(n<2){
    return false
  }
  for(let i=2; i<Math.sqrt(n); i++)
  {
    if(n%i===0){
        return false
    }
  }
  return true;
}
console.log(isprime(2));
console.log(isprime(5));
console.log(isprime(10));
console.log(isprime(17));

/* big O  complexcity line 8 = O(n),   and other case O(1) 
    time complexsity Big-O =O(squrt(n))



*/