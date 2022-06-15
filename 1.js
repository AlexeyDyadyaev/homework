/* function fib(num) {
    if (typeof(num) !== 'number' || num === 0){
        return '';
    }
    let result ='';
    
    if (num === 1){
        result = '0';
        return result ;
    }
    let next;
    next = fib(num - 1) + fib(num - 2);
    result += next; 
    return result;
}
console.log(fib(7)); */

function fib(n){
    return (fib(n - 1) + fib(n - 2));
}
console.log(fib(10));