// Fabonacci sequence 
// problem=Give a number 'n' , find the first 'n' element of fionacci sequence
function Fabonacci(n){
    const fib =[0,1];
    for (let  i=2 ;  i<n; i++)
    {
        fib[i]=fib[i-1]+fib[i-2];   
    }
    return fib;
}
console.log(Fabonacci(2));
console.log(Fabonacci(7));
console.log(Fabonacci(100));
